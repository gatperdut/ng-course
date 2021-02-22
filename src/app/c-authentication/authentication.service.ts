import { HttpClient, HttpErrorResponse, HttpHandler, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { AuthenticationResponseData } from "./authentication-response-data.interface";
import { UserData } from "./user-data.interface";
import { User } from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly signupUrl: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp'

  private readonly signinUrl: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword';

  private apiKey: string = 'AIzaSyA-y97QCDzcSaMqeUDH14MvdBWCwV4tFzQ';

  public userChangedSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  private autoSignoutTimer: NodeJS.Timeout;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {

  }

  private catchError(httpErrorResponse: HttpErrorResponse): Observable<AuthenticationResponseData> {
    let message: string = 'An error occurred.';

    if (httpErrorResponse.error && httpErrorResponse.error.error) {
      switch (httpErrorResponse.error.error.message) {
        case 'EMAIL_EXISTS':
          message = 'This email address is already registered.';
          break;
        case 'EMAIL_NOT_FOUND':
        case 'INVALID_PASSWORD':
          message = 'Wrong email or password.';
          break;
        }
    }

    return throwError(message);
  }

  private broadcastUser(authenticationResponseData: AuthenticationResponseData): void {
    const expiresInMs: number = parseInt(authenticationResponseData.expiresIn) * 1000;

    const expirationDate: Date = new Date(
      new Date().getTime() +
      expiresInMs
    );

    const user = new User(
      authenticationResponseData.email,
      authenticationResponseData.localId,
      authenticationResponseData.idToken,
      expirationDate
    );

    this.autoLogout(expiresInMs);

    localStorage.setItem('userData', JSON.stringify(user));

    this.userChangedSubject.next(user);
  }

  public signup(email: string, password: string): Observable<AuthenticationResponseData> {
    let httpParams = new HttpParams().set('key', this.apiKey);

    return this.httpClient.post<AuthenticationResponseData>(
      this.signupUrl,
      {
        email: email,
        password: password,
        returnSecureToken: true
      },
      {
        params: httpParams
      }
    )
    .pipe(
      catchError(this.catchError),
      tap(this.broadcastUser.bind(this))
    );
  }

  public autoSignin(): void {
    const userDataRaw: string = localStorage.getItem('userData');

    if (!userDataRaw) {
      return;
    }

    const userData: UserData = JSON.parse(userDataRaw);

    const user: User = new User(
      userData.id,
      userData.email,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (user.token) {
      const expiresInMs = user._tokenExpirationDate.getTime() - new Date().getTime();

      if (expiresInMs > 0) {
        this.autoLogout(expiresInMs);

        this.userChangedSubject.next(user);
      }
    }
  }

  public signin(email: string, password: string): Observable<AuthenticationResponseData> {
    let httpParams = new HttpParams().set('key', this.apiKey);

    return this.httpClient.post<AuthenticationResponseData>(
      this.signinUrl,
      {
        email: email,
        password: password,
        returnSecureToken: true
      },
      {
        params: httpParams
      }
    )
    .pipe(
      catchError(this.catchError),
      tap(this.broadcastUser.bind(this))
    );
  }

  public autoLogout(duration: number): void {
    this.autoSignoutTimer = setTimeout(
      this.signout.bind(this),
      duration
    );
  }

  public signout(): void {
    if (this.autoSignoutTimer) {
      clearTimeout(this.autoSignoutTimer);
    }

    this.autoSignoutTimer = null;

    this.userChangedSubject.next(null);

    localStorage.removeItem('userData');

    this.router.navigate(['/authentication']);
  }

}
