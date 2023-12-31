import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') myBackgroundColor: string = "";

  // constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  constructor() {}

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow')
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow')
    this.myBackgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    this.myBackgroundColor = 'transparent';
  }
    
}
