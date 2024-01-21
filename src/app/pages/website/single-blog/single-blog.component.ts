import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-blog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.scss'
})
export class SingleBlogComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Thadeus Nyariki - Welcome')
  }

}
