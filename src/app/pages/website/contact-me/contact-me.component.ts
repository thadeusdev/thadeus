import { Component } from '@angular/core';
import { SliderButtonComponent } from "../../../libs/slider-button/slider-button.component";

@Component({
    selector: 'app-contact-me',
    standalone: true,
    templateUrl: './contact-me.component.html',
    styleUrl: './contact-me.component.scss',
    imports: [SliderButtonComponent]
})
export class ContactMeComponent {

}
