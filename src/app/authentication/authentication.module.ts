import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { AuthenticationComponent } from "./authentication.component";

@NgModule({
  declarations: [
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AuthenticationRoutingModule
  ],
  exports: [
    AuthenticationComponent
  ]
})
export class AuthenticationModule {

}
