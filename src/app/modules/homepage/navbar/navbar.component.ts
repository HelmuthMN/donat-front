import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const navbarToggle = navbar.querySelector("#navbar-toggle");
    // const navbarMenu = document.querySelector("#navbar-menu");
    // const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
    // let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

    // const toggleNavbarVisibility = () => {
    //   isNavbarExpanded = !isNavbarExpanded;
    //   navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
    // };

    // navbarToggle.addEventListener("click", toggleNavbarVisibility);

    // navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
    // navbarMenu.addEventListener("click", toggleNavbarVisibility);
  }

}
