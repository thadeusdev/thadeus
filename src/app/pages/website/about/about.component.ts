import { Component } from '@angular/core';
import { PillImageComponent } from "../../../libs/pill-image/pill-image.component";
import { SubscribeNewsletterComponent } from "../../../libs/subscribe-newsletter/subscribe-newsletter.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss',
    imports: [PillImageComponent, SubscribeNewsletterComponent]
})
export class AboutComponent {

}
