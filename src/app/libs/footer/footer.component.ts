import { Component } from '@angular/core';
import { CopyrightComponent } from "../copyright/copyright.component";

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    imports: [CopyrightComponent]
})
export class FooterComponent {

}
