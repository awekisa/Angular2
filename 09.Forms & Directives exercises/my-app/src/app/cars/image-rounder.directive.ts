import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[borderDirective]'
})
export class ImageRounderDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style = 'border-radius: 15px;'
  }

}