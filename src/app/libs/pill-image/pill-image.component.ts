import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pill-image',
  standalone: true,
  imports: [],
  templateUrl: './pill-image.component.html',
  styleUrl: './pill-image.component.scss'
})
export class PillImageComponent {
  @Input({ required: true}) imageSrc!: string;
}
