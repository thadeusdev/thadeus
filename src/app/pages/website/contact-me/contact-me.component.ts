import { Component } from '@angular/core';
import { SliderButtonComponent } from "../../../libs/slider-button/slider-button.component";
import { Title } from '@angular/platform-browser';

import emailjs from '@emailjs/browser'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-contact-me',
    standalone: true,
    templateUrl: './contact-me.component.html',
    styleUrl: './contact-me.component.scss',
    imports: [SliderButtonComponent, ReactiveFormsModule, CommonModule]
})
export class ContactMeComponent {
    form: FormGroup = this.fb.group({
        from_name: '',
        to_name: 'Admin',
        from_email: '',
        from_company: '',
        message: ''
    })

    constructor(private titleService: Title, private fb: FormBuilder) {
        this.titleService.setTitle('Thadeus Nyariki - Contact Me')
    }

    async send() {
        emailjs.init('U49CIm2Ab9bmnZAdx')
        let response = await emailjs.send("service_vtjow5g","template_cz9o8qt",{
          from_name: this.form.value.from_name,
          to_name: this.form.value.to_name,
          from_email: this.form.value.from_email,
          from_company: this.form.value.from_company,
          message: this.form.value.message,
        });

        alert('Message has been sent.');
        this.form.reset();
    }   


}
