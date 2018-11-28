import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() needColor: string;
  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor('enter');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('leave');
  }
  constructor(private el: ElementRef) { }

  private changeColor(val: string) {
    if (val === 'enter') {
      this.el.nativeElement.style.background = this.needColor;
    } else {
      this.el.nativeElement.style.background = '';
    }

  }

}
