// UNUSED - reference

import { ElementRef, HostBinding, HostListener, Input } from '@angular/core';
import { Directive, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @Input() defaultColor: string = 'transparent';
  @Input('cHighlight') highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  @HostListener('mouseenter') mouseenter(event: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.highlightColor);
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.defaultColor);
    this.backgroundColor = this.defaultColor;
  }

}
