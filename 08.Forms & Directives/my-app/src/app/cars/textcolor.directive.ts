import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[textColor]'
})
export class TextColorDirective {
  @Input('textColor') color: string;

  @HostListener('mouseenter') onMouseEnter () {
    this.changeColor(this.color);
  }

  @HostListener('mouseleave') onMouseLeave () {
    this.changeColor(null)
  }
  constructor(private el: ElementRef) {}

  private changeColor (color) {
    this.el.nativeElement.style.color = color;
  }
}