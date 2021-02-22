import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, OnDestroy, ViewChild, ViewContainerRef } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable, Subscription } from "rxjs";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";
import { AuthenticationService } from "./services/authentication.service";
import { AuthenticationResponseData } from "./models/authentication-response-data.interface";

@Component({
  selector: 'authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnDestroy {

  public signinMode: boolean = true;

  public loading: boolean = false;

  public error: string = null;

  @ViewChild(PlaceholderDirective, { static: false }) cAlertComponentHost: PlaceholderDirective;

  private onAlertCloseSubscription: Subscription;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {

  }

  public ngOnDestroy(): void {
    if (this.onAlertCloseSubscription && !this.onAlertCloseSubscription.closed) {
      this.onAlertCloseSubscription.unsubscribe();
    }
  }

  public onSwitchMode(): void {
    this.signinMode = !this.signinMode;
  }

  // public onCloseAlert(): void {
  //   this.error = null;
  // }

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
        // this.error = errorMessage;
        this.handleError(errorMessage);
        this.loading = false;
      }
    );

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
