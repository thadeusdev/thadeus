import { Component } from '@angular/core';
import { PillImageComponent } from "../../../libs/pill-image/pill-image.component";
import { SubscribeNewsletterComponent } from "../../../libs/subscribe-newsletter/subscribe-newsletter.component";
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    imports: [PillImageComponent, SubscribeNewsletterComponent]
})
export class AboutComponent {
    constructor(private titleService: Title) {
        this.titleService.setTitle('Thadeus Nyariki - About Me')
    }

}
