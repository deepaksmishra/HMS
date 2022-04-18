import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
  }

  
  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email,]],
    password: ['', [Validators.required, Validators.minLength(6)]],

  })
  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    
    if (this.loginForm.value.email == 'admin@gmail.com' && this.loginForm.value.password == 'admin@123') {
      this.router.navigateByUrl('/userhome');
      console.log(this.loginForm.value.email)
      console.log(this.loginForm.value);
    }
    else {
      alert("please enter valid email and password")
      
    }


  }
save()
{ 
  sessionStorage.setItem('admin@gmail.com','admin');
}
}
