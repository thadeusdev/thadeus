import { Component } from '@angular/core';
import { CopyrightComponent } from "../copyright/copyright.component";
import { SliderButtonComponent } from "../slider-button/slider-button.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    imports: [CopyrightComponent, SliderButtonComponent, RouterLink]
})
export class FooterComponent {

}
