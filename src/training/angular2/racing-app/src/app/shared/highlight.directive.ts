import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostBinding('class') cssClass = '';
  @HostListener('mouseover') onMouseEnter() {
    this.cssClass = 'highlight';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.cssClass = '';
  }
}