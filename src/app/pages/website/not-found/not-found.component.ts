import { Component } from '@angular/core';
import { SliderButtonComponent } from "../../../libs/slider-button/slider-button.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-not-found',
    standalone: true,
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.scss',
    imports: [SliderButtonComponent, RouterLink]
})
export class NotFoundComponent {

}
