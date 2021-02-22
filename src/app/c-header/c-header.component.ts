import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthenticationService } from "../c-authentication/authentication.service";
import { User } from "../c-authentication/user.model";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
  selector: 'c-header',
  templateUrl: './c-header.component.html',
  styleUrls: ['./c-header.component.scss']
})
export class CHeaderComponent implements OnInit, OnDestroy {

  private userSubscription: Subscription = new Subscription();

  private user: User = null;

  constructor(
    private router: Router,
    private dataStorageService: DataStorageService,
    private authenticationService: AuthenticationService,
  ) {

  }

  ngOnInit(): void {
    this.userSubscription = this.authenticationService.userChangedSubject.subscribe(
      (user: (User)) => {
        this.user = user;
      }
    );
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  public get authenticated(): boolean {
    return !!this.user;
  }

  public onNewRecipe(): void {
    this.router.navigate(['/recipes', 'new']);
  }

  public onSave(): void {
    this.dataStorageService.save();
  }

  public onLoad(): void {
    this.dataStorageService.load().subscribe();
  }

  public onSignout(): void {
    this.authenticationService.signout();
  }

  public onAuthenticate(): void {
    this.router.navigate(['/authentication']);
  }

}
