// UNUSED - reference

import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[c-dropdown]'
})
export class CDropdownDirective {
  @HostBinding('class.open') open = false;

  @HostListener('click') toggle(): void {
    this.open = !this.open;
  }
}
