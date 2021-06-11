import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
          emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
            Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
          ]);



          form!: FormGroup;
          public loginInvalid = false;
          private formSubmitAttempt = false;

          constructor(private router: Router, private fb: FormBuilder) { }

          ngOnInit(): void {
          this.form = this.fb.group({
            email: ['', Validators.required],
            username: ['', Validators.email],
            subject: ['', Validators.required],
            message: ['', Validators.required],
            mobile: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],


            });
          }
          // tslint:disable-next-line:typedef
          get f(){
            return this.form.controls;
          }
        // tslint:disable-next-line:typedef
        async onSubmit() {


        this.loginInvalid = false;

        this.formSubmitAttempt = false;


        // console.log(this.form.get('username')?.value);
        const username = this.form.get('username')?.value;

        const message = this.form.get('message')?.value;
        const email = this.form.get('email')?.value;
        const mobile = this.form.get('mobile')?.value;
        const subject = this.form.get('subject')?.value;
        console.log(username);
        console.log(email);
        console.log(message);
        console.log(mobile);
        console.log(subject);
        }

        }

