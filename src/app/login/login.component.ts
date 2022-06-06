import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { LoginserviceService } from '../loginservice.service';
import { loginuser } from '../loginuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = false;

  constructor(private fb: FormBuilder,  private router: Router, private toastr:ToastrService,private loginservice: LoginserviceService ) {
  console.log("loginloaded")}
  
  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    Email: ['', [Validators.required, Validators.email,]],
    password: ['', [Validators.required, Validators.minLength(6)]],

  })


  dataSaved = false;
  userIdUpdate = null;
  allUsers: Observable<loginuser[]> | any;


  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    
    if (this.loginForm.valid) {
      // this.toastr.success('Successfully Logged In');

      const loginuser = this.loginForm.value;
       this.CreateloginUser(loginuser);
      //console.log(this.loginForm.value.Email)
      //console.log(this.loginForm.value);

      {
      //this.router.navigateByUrl('/userhome');
      }
    }
    else {
      this.toastr.warning('Please check the email and password');
      
    }


  }
  CreateloginUser(user: loginuser) {
    if (this.userIdUpdate == null) {

      this.loginservice.CreateloginUser(user).subscribe(
        () => {
          this.dataSaved = true;
         
          this.router.navigate(['/userhome']);// ON SUCCESS
         
          this.userIdUpdate = null;
          this.loginForm.reset();
        },
        
        
      );
    }
    else {
      return;
     
    }
  }


}
