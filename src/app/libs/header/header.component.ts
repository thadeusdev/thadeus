import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navVariable: boolean = false;
  nav_icon_variable: boolean = false;

  openNav() {
    // this.navVariable = true;
    this.navVariable =! this.navVariable;
    this.nav_icon_variable =! this.nav_icon_variable;
  }

  closeNav() {
    this.navVariable = false;
    this.nav_icon_variable = false;
  }

  onLinkClick() {
    this.closeNav();
  }
}
