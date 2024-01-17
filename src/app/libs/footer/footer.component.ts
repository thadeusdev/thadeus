import { Component } from '@angular/core';
import { CopyrightComponent } from "../copyright/copyright.component";
import { SliderButtonComponent } from "../slider-button/slider-button.component";

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    imports: [CopyrightComponent, SliderButtonComponent]
})
export class FooterComponent {

}
