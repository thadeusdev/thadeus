import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { LandingComponent } from "./pages/website/landing/landing.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, LandingComponent]
})
export class AppComponent {
  title = 'thadeus';

    //Scroll to Top on Navigation
    constructor(private router: Router, private viewportScroller: ViewportScroller) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      });
    }
}


