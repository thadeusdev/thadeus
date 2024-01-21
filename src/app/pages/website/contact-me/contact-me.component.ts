import { Component } from '@angular/core';
import { SliderButtonComponent } from "../../../libs/slider-button/slider-button.component";
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-contact-me',
    standalone: true,
    templateUrl: './contact-me.component.html',
    styleUrl: './contact-me.component.scss',
    imports: [SliderButtonComponent]
})
export class ContactMeComponent {
    constructor(private titleService: Title) {
        this.titleService.setTitle('Thadeus Nyariki - Contact Me')
    }

}
