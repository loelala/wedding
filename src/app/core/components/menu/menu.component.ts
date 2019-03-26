import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output()
  closeMenu: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirect(route: string) {
    this.closeMenu.emit(true);
    this.router.navigate([route]);
  }

}
