import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider-button',
  standalone: true,
  imports: [],
  templateUrl: './slider-button.component.html',
  styleUrl: './slider-button.component.scss'
})
export class SliderButtonComponent {
  @Input() message: string = 'Default Message';
}
