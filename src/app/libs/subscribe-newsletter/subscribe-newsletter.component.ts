import { Component } from '@angular/core';
import { SliderButtonComponent } from "../slider-button/slider-button.component";

@Component({
    selector: 'app-subscribe-newsletter',
    standalone: true,
    templateUrl: './subscribe-newsletter.component.html',
    styleUrl: './subscribe-newsletter.component.scss',
    imports: [SliderButtonComponent]
})
export class SubscribeNewsletterComponent {

}
