import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  standalone: true,
  imports: [],
  templateUrl: './copyright.component.html',
  styleUrl: './copyright.component.scss'
})

export class CopyrightComponent implements OnInit {
  currentYear!: number;

  ngOnInit() {
    this.getCurrentYear();
  }

  getCurrentYear() {
    const currentDate = new Date();
    this.currentYear = currentDate.getFullYear();
    console.log(this.currentYear);
  }

}
