import { Component, OnInit, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
declare const window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public opacity = 0;
  public opacityReverse = 1;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const num = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.opacity = 1 - (1 - num / 5000);
    this.opacityReverse = 1 - num / 5000;
  }
}
