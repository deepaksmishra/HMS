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
    
    Name:new FormControl('',[Validators.required,Validators.minLength(3)]),
    Username:new FormControl('',[Validators.required,Validators.minLength(3)]),
    Email:new FormControl('',[Validators.pattern('@'),Validators.required,Validators.email]),
    Gender:new FormControl('',[Validators.pattern('@'),Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')]),
  });


  Employeeform:FormGroup | any;
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
    this.AddUserRegistration(user);
    this.userForm.reset();
  }
  //create a function CreateUser for registration of a new user
  AddUserRegistration(user: User) {
    if (this.userIdUpdate == null) {
      //subscribe() is a method on the Observable type. The Observable type is a 
      //utility that asynchronously or synchronously streams data 
      //to a variety of components or services that have subscribed to the observable.
      this.userservice.AddUserRegistration(user).subscribe(
        () => {
          this.dataSaved = true;
          //this.message = 'Record saved Successfully';
          this.loadAllUsers();
          this.userIdUpdate = null;
          this.userForm.reset();
        }
      );
    } else {
      user.id = this.userIdUpdate;
      this.userservice.UpdateUserRegistration(user).subscribe(() => {
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
      'id':new FormControl(null),
      'Name':new FormControl(null),
      'Username':new FormControl(null),
      'Email':new FormControl(null),
      'Gender':new FormControl(null),
      'password':new FormControl(null),
    })
  }
  loadAllUsers()
  {
    this.allUsers=this.userservice.GetUserRegistrationDetails();
  }
  //create a function loadUserToEdit to update the details of existing user
  loadUserToEdit(userId: number) 
  {
      this.userservice.getUserById(userId).subscribe(user => 
      {
      this.message = null;
      this.dataSaved = false;
      this.userIdUpdate = user.id;
      this.userForm.Controls['id'].setValue(user.id);
      this.userForm.controls['Name'].setValue(user.Name);
      this.userForm.controls['Username'].setValue(user.Username);
      this.userForm.controls['Email'].setValue(user.Email);
      this.userForm.controls['Gender'].setValue(user.Gender);
      this.userForm.controls['password'].setValue(user.password);
      
      
    });

  }
  //create a function deleteUser to delete an existing user
  deleteUser(userId: number) {
    if (confirm("Are you sure you want to delete this ?")) {  
    this.userservice.DeleteUserRegistration(userId).subscribe(() => {
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
  get FullName() {
    return this.userForm.get('Name');
     }
     get Email()
     { 
       return this.userForm.get('Email');
   }
   get Password(){ 
     return this.userForm.get('password');
   }
   get UserName()
   { 
     return this.userForm.get('Username');
   }
   get PhoneNumber()
   { 
     return this.userForm.get('PhoneNumber');
   }
}