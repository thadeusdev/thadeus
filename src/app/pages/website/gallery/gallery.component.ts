import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Thadeus Nyariki - Photos')
}

}
