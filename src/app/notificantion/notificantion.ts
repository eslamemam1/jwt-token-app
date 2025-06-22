import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-notificantion',
  imports: [],
  templateUrl: './notificantion.html',
  styleUrl: './notificantion.css',
})
export class Notificantion {
  @ViewChild('notfi') notfi!: ElementRef;
  constructor(private renderer: Renderer2) {}
  onclick() {
    console.log('ok');
    this.renderer.setStyle(this.notfi.nativeElement, 'visibility', 'visible');
    setTimeout(() => {
      this.renderer.setStyle(this.notfi.nativeElement, 'visibility', 'hidden');
    }, 2000);
  }
}
