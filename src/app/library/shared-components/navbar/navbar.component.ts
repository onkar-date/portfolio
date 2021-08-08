import { NavbarLinks } from './../../../shared/constants/navbar-links.constant';
import { ScrollingIds } from './../../../shared/constants/scrolling-Id.constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  navbarLinks = NavbarLinks;
  constructor() { }

  ngOnInit(): void {
  }

  scroll(id): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

}
