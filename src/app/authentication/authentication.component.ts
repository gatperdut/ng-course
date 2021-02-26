import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable, Subscription } from "rxjs";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";
import { AuthenticationService } from "./services/authentication.service";
import { AuthenticationResponseData } from "./models/authentication-response-data.interface";
import { AppState } from "../store/app.state";
import { Store } from "@ngrx/store";
import { SigninPreAction, SigninPreActionPayload } from "./store/actions/signin-pre.action";
import { AuthenticationState } from "./store/authentication.state";

@Component({
  selector: 'authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, OnDestroy {

  public signinMode: boolean = true;

  public loading: boolean = false;

  public error: string = null;

  @ViewChild(PlaceholderDirective, { static: false }) cAlertComponentHost: PlaceholderDirective;

  private onAlertCloseSubscription: Subscription;

  constructor(
    private authenticationService: AuthenticationService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appState: Store<AppState>
  ) {

  }

  public ngOnInit(): void {
    this.appState.select('authenticationState').subscribe(
      (authenticationState: AuthenticationState): void => {
        this.loading = authenticationState.loading;
        this.error = authenticationState.error;
        if (this.error) {
          this.handleError(this.error);
        }
      }
    );
  }

  public ngOnDestroy(): void {
    if (this.onAlertCloseSubscription && !this.onAlertCloseSubscription.closed) {
      this.onAlertCloseSubscription.unsubscribe();
    }
  }

  public onSwitchMode(): void {
    this.signinMode = !this.signinMode;
  }

  onSubmit(ngForm: NgForm): void {
    const email: string = ngForm.value.email;
    const password: string = ngForm.value.password;

    let observable: Observable<AuthenticationResponseData>;

    if (this.signinMode) {
      const signinPreActionPayload: SigninPreActionPayload = {
        email: email,
        password: password
      };
      this.appState.dispatch(new SigninPreAction(signinPreActionPayload));
    }
    else {
      observable = this.authenticationService.signup(email, password);
    }

    ngForm.reset();
  }

  private handleError(message: string): void {
    const cAlertComponentFactory: ComponentFactory<AlertComponent> = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);

    const cAlertComponentHostViewContainerRef: ViewContainerRef = this.cAlertComponentHost.viewContainerRef;

    cAlertComponentHostViewContainerRef.clear();

    const cAlertComponent: ComponentRef<AlertComponent> = cAlertComponentHostViewContainerRef.createComponent(cAlertComponentFactory);

    cAlertComponent.instance.message = message;

    this.onAlertCloseSubscription = cAlertComponent.instance.onCloseEventEmitter.subscribe(
      (): void => {
        cAlertComponentHostViewContainerRef.clear();

        this.onAlertCloseSubscription.unsubscribe();
      }
    );
  }

}
