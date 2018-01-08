import {
  Directive, Renderer,
  HostListener,
  HostBinding,
  ElementRef, Input
} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

@Directive({
  selector: '[hover]'
})
export class MyHoverDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer) {
    // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseover') onMouseOver() {
    this.renderer.setElementStyle( this.el.nativeElement, 'backgroundColor', '#4A148C');
    let part = this.el.nativeElement.querySelector('.detail');
    this.renderer.setElementStyle(part, 'display', 'block');
    this.renderer.setElementStyle(part, 'marginTop', '20px');
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.setElementStyle( this.el.nativeElement, 'backgroundColor', 'white');
    let part = this.el.nativeElement.querySelector('.detail');
    this.renderer.setElementStyle(part, 'display', 'none');
    
  }


}
