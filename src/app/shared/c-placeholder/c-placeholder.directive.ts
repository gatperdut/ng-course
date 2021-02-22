import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[cPlaceholder]'
})
export class CPlaceholderDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) {

  }

}
