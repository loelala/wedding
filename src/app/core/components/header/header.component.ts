import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuVisible = false;

  constructor() {
  }

  ngOnInit() {
  }

  public showMenu(): void {
    this.menuVisible = this.menuVisible ? false : true;
  }

  public setVisibilityOfMenu(event: boolean): void {
    this.menuVisible = event;
  }

}
