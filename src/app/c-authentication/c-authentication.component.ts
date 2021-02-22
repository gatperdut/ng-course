import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationResponseData } from "./authentication-response-data.interface";
import { AuthenticationService } from "./authentication.service";

@Component({
  selector: 'c-authentication',
  templateUrl: './c-authentication.component.html',
  styleUrls: ['./c-authentication.component.scss']
})
export class CAuthenticationComponent {

  signinMode: boolean = true;

  loading: boolean = false;

  error: string = null;

  constructor(private authenticationService: AuthenticationService, private router: Router) {

  }

  onSwitchMode(): void {
    this.signinMode = !this.signinMode;
  }

  onSubmit(ngForm: NgForm): void {
    const email: string = ngForm.value.email;
    const password: string = ngForm.value.password;

    this.loading = true;

    let observable: Observable<AuthenticationResponseData>;

    if (this.signinMode) {
      observable = this.authenticationService.signin(email, password);
    }
    else {
      observable = this.authenticationService.signup(email, password);
    }

    observable
    .subscribe(
      (authenticationResponseData: AuthenticationResponseData): void => {
        this.router.navigate(['/recipes']);
        this.loading = false;
      },
      (errorMessage: string) => {
        this.error = errorMessage;
        this.loading = false;
      }
    );

    ngForm.reset();
  }

}
