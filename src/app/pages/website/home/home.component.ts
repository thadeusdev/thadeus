import { Component } from '@angular/core';
import { StackedImageComponent } from "../../../libs/stacked-image/stacked-image.component";
import { SliderButtonComponent } from "../../../libs/slider-button/slider-button.component";
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [StackedImageComponent, SliderButtonComponent]
})
export class HomeComponent {

    constructor(private titleService: Title) {
        this.titleService.setTitle('Thadeus Nyariki - Home')
    }
}
