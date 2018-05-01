import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector : '[appHiglight]'
})
export class BasicHighlightDirective implements OnInit{

  constructor(private elemntRef: ElementRef) {}

  ngOnInit() {
    this.elemntRef.nativeElement.style.backgroundColor = 'green';
  }
}
