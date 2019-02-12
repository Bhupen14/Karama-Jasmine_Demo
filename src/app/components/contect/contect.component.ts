import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contect',
  templateUrl: './contect.component.html',
  styleUrls: ['./contect.component.css']
})
export class ContectComponent implements OnInit {
  text = 'contact page';
  contactForm: FormGroup;

  contact = 
  {
      name: '',
      email: '',
      text: ''
  };
  submitted = false;

  constructor() {
    this.createForm();
   }
    createForm(): void {
        this.contactForm = new FormGroup(
          {
            'name': new FormControl(this.contact.name, [
                Validators.required,
                Validators.minLength(4)
            ]),
            'email': new FormControl(this.contact.email, [
                Validators.required,
                Validators.email
            ]),
            'text': new FormControl(this.contact.text, Validators.required)
        });
    }

    onSubmit(): void {
        this.submitted = true;
    }

  ngOnInit() {
  }

}
