import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

import{MustMatch} from './helper.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }
  registerform: FormGroup = this.fb.group({
    radio: ['', [Validators.required,]],
    TC: ['', [Validators.required,]],
    email: ['', [Validators.required, Validators.email,]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    FirstName: ['', [Validators.required, Validators.minLength(3)]],
    confirmPassword:['', Validators.required]},{
      validator: MustMatch('password', 'confirmPassword')
      
    }
  
    );
    

    onregister(): void {
      if (!this.registerform.valid) {
        return;
      }
      
      if (this.registerform.valid) {
        alert("Registered Succesfully")

        this.router.navigateByUrl('');
        console.log(this.registerform.value.email)
        console.log(this.registerform.value);
      }
     

}
}
