import { Component } from '@angular/core';
import { FooterComponent } from "../../../libs/footer/footer.component";
import { HeaderComponent } from "../../../libs/header/header.component";
import { HomeComponent } from "../home/home.component";

@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss',
    imports: [FooterComponent, HeaderComponent, HomeComponent]
})
export class LandingComponent {

}
