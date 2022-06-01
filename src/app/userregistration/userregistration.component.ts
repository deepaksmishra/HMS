import { Component, OnInit } from '@angular/core';

 import { Observable } from 'rxjs';
//import user.ts
import { User } from '../user';
//importuser-service.service.ts
import { UserServiceService } from '../userservice.service';
//import for Form designing in Angular
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
//validation


@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserRegistrationComponent implements OnInit 
{
  
  loginform=new FormGroup({
    FirstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    LastName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    Email:new FormControl('',[Validators.pattern('@'),Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')]),
    phoneNumber:new FormControl('',[Validators.required,Validators.nullValidator])
  });


  Employeeform:FormGroup | any;
  Gender = ['male', 'female'];
  allUsers :Observable<User[]> | any; 
  userForm :FormGroup | any;
  dataSaved = false;
  userIdUpdate = null;
  message = null;
  
  //inheriting UserServiceService from user-service.service.ts
 
  constructor(private userservice:UserServiceService ,private fb : FormBuilder)
  {

  }
  //create a function onSubmit 
  onSubmit()
  {
    console.log(this.userForm)
    this.dataSaved = false;
    const user = this.userForm.value;
    //Invoking the CreateUser function
    this.CreateUser(user);
    this.userForm.reset();
  }
  //create a function CreateUser for registration of a new user
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
  ngOnInit(): void {
    this.loadAllUsers();
    console.log(this.allUsers)
    this.userForm=new FormGroup({
      'FirstName':new FormControl(null),
      'LastName':new FormControl(null),
      'Email':new FormControl(null),
      'phoneNumber':new FormControl(null),
      'password':new FormControl(null),
      'Gender':new FormControl(null)
    })
  }
  loadAllUsers()
  {
    this.allUsers=this.userservice.getAllUsers();
  }
  //create a function loadUserToEdit to update the details of existing user
  loadUserToEdit(userId: number) 
  {
      this.userservice.getUserById(userId).subscribe(user => 
      {
      this.message = null;
      this.dataSaved = false;
      this.userIdUpdate = user.id;
      this.userForm.controls['FirstName'].setValue(user.FirstName);
      this.userForm.controls['LastName'].setValue(user.LastName);
      this.userForm.controls['Email'].setValue(user.Email);
      this.userForm.controls['phoneNumber'].setValue(user.phonenumber);
      this.userForm.controls['password'].setValue(user.password);
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
     get Email()
     { 
       return this.userForm.get('Email');
   }
   get Password(){ 
     return this.userForm.get('password');
   }
   get LastName()
   { 
     return this.userForm.get('LastName');
   }
   get phoneNumber()
   { 
     return this.userForm.get('phonenumber');
   }
}