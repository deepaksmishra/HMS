import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { MustMatch } from './helper.component';
import { ToastrService } from 'ngx-toastr';
//importuser-service.service.ts
import { UserServiceService } from '../userservice.service';
import { Observable } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  
  hide: boolean = false;
  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private userservice: UserServiceService) { }

  ngOnInit(): void {
    this.loadAllUsers();
    console.log(this.allUsers)

    this.userForm = new FormGroup({
      'FirstName': new FormControl(null),
      'LastName': new FormControl(null),
      'Email': new FormControl(null),
      'phonenumber': new FormControl(null),
      'password': new FormControl(null),
      'Gender': new FormControl(null),
      'Terms': new FormControl(null),
      'confirmPassword': new FormControl(null)

    })
  }

  registerform: FormGroup = this.fb.group({
    Gender: ['', [Validators.required,]],
    Terms: ['', [Validators.required,]],
    Email: ['', [Validators.required, Validators.email,]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    FirstName: ['', [Validators.required, Validators.minLength(3)]],
    phonenumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    LastName: ['', [Validators.required, Validators.minLength(3)]],
    confirmPassword: ['', Validators.required],

  },
    { validator: MustMatch('password', 'confirmPassword') }
  );

  Employeeform: FormGroup | any;
  Gender = ['Male', 'Female'];
  allUsers: Observable<User[]> | any;
  userForm: FormGroup | any;
  dataSaved = false;
  userIdUpdate = null;
  message = null;


  onregister(): void {

    if (this.registerform.valid) {
      console.log(this.userForm.value)
      this.dataSaved = false;
      this.toastr.error('Invalid data');
      //this.userForm.reset();
    }
    if (!this.registerform.valid) {
      const user = this.userForm.value;
      this.CreateUser(user);
      console.log(user)
      this.userForm.reset();
      this.toastr.success('Rigistration Succesfull');
      this.router.navigateByUrl('/login');
      console.log(this.registerform.value.Email)
      console.log(this.registerform.value);
    }
  }
  CreateUser(user: User) {
    if (this.userIdUpdate == null) {

      this.userservice.createUser(user).subscribe(
        () => {
          this.dataSaved = true;
          //this.message = 'Record saved Successfully';
          this.loadAllUsers();
          this.userIdUpdate = null;
          this.userForm.reset();
        }
      );
    }
    else {
      user.id = this.userIdUpdate;
      this.userservice.updateUser(user).subscribe(() => {
        this.dataSaved = true;
        //this.message = 'Record Updated Successfully';
        this.loadAllUsers();
        this.userIdUpdate = null;
        this.userForm.reset();
      });
    }
  }

  loadAllUsers() {
    this.allUsers = this.userservice.getAllUsers();
  }

  //create a function loadUserToEdit to update the details of existing user
  loadUserToEdit(userId: number) {
    this.userservice.getUserById(userId).subscribe(user => {
      this.message = null;
      this.dataSaved = false;
      this.userIdUpdate = user.id;
      this.userForm.controls['FirstName'].setValue(user.FirstName);
      this.userForm.controls['LastName'].setValue(user.LastName);
      this.userForm.controls['Email'].setValue(user.Email);
      this.userForm.controls['phonenumber'].setValue(user.phonenumber);
      this.userForm.controls['Password'].setValue(user.password);
      this.userForm.controls['Gender'].setValue(user.Gender);
    });
  }
  //create a function deleteUser to delete an existing user
  deleteUser(userId: number) {
    if (confirm("Are you sure you want to delete this ?")) {
      this.userservice.deleteUserById(userId).subscribe(() => {
        this.dataSaved = true;
        // this.message = 'Record Deleted Succefully';
        this.loadAllUsers();
        this.userIdUpdate = null;
        this.userForm.reset();

      });
    }
  }

  resetForm() {
    this.userForm.reset();
    this.message = null;
    this.dataSaved = false;
  }
  get FirstName() {
    return this.userForm.get('FirstName');
  }
  get Email() {
    return this.userForm.get('Email');
  }
  get Password() {
    return this.userForm.get('password');
  }
  get LastName() {
    return this.userForm.get('LastName');
  }
  get phonenumber() {
    return this.userForm.get('phonenumber');
  }


}
