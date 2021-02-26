import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/app.state";
import { UserData } from "../models/user-data.interface";
import { User } from "../models/user.model";
import { AuthenticateAction, AuthenticateActionPayload } from "../store/actions/authenticate.action";
import { SignoutAction, SignoutActionPayload } from "../store/actions/signout.action";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private autoSignoutTimer: NodeJS.Timeout;

  constructor(
    private router: Router,
    private appState: Store<AppState>
  ) {

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

        const authenticateActionPayload: AuthenticateActionPayload = {
          id: userData.id,
          email: userData.email,
          token: userData._token,
          tokenExpirationDate: new Date(userData._tokenExpirationDate)
        };

        this.appState.dispatch(new AuthenticateAction(authenticateActionPayload));
      }
    }
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

    const signoutActionPayload: SignoutActionPayload = {};

    this.appState.dispatch(new SignoutAction(signoutActionPayload));

    localStorage.removeItem('userData');

    this.router.navigate(['/authentication']);
  }

}
