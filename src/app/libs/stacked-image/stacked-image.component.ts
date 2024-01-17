import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stacked-image',
  standalone: true,
  imports: [],
  templateUrl: './stacked-image.component.html',
  styleUrl: './stacked-image.component.scss'
})
export class StackedImageComponent {
  @Input() imageSrc!: string;
}
