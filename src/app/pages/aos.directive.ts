import { Directive, AfterViewInit } from '@angular/core';
import AOS from 'aos';

@Directive({
  selector: '[appAos]'
})
export class AosDirective implements AfterViewInit {
  ngAfterViewInit() {
    AOS.init();
  }
}
