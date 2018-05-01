import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  constructor(private elementRef: ElementRef, private rendrer: Renderer2) { }

  ngOnInit() {
    /*this.rendrer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');*/
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
/*    this.rendrer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');*/
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    /*this.rendrer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');*/
  this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
}
