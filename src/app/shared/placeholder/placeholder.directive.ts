import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[cPlaceholder]'
})
export class PlaceholderDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) {

  }

}
