//This communication is done over HTTP protocol. 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//Observable module
import { Observable } from 'rxjs';
//user.ts class
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
//asp.net web api (the api should be running while consuming from Angular)
  url =  'http://localhost:7282/api/UserRegistration';  
  //Will invoke UserRegistrationsController->GetUserRegistrations()
  //GET->Read records
	  constructor(private http: HttpClient) { }  
	  GetUserRegistrationDetails(): Observable<User[]> {  
	    return this.http.get<User[]>(this.url );  
	  }  
	  getUserById(userId: number): Observable<User> {  
	    return this.http.get<User>(this.url + '/' + userId);  
	  } 
	  // Will invoke UserRegistrationsController->PostUserRegistration
	  AddUserRegistration(user: User): Observable<User> {  
	    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
	    return this.http.post<User>(this.url ,  
	    user, httpOptions);  
	  } 
	  //Will invoke UserRegistrationsController->PutUserRegistration 
	  UpdateUserRegistration(user: User): Observable<User> {  
	    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
	    return this.http.put<User>(this.url + '/'+ user.id, 
	    user, httpOptions);  
	  }   
	  //Will invoke UserRegistrationsController->DeleteUserRegistration
	  DeleteUserRegistration(userid:number): Observable<number> {  
	    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
	    return this.http.delete<number>(this.url + '/DeleteUserDetails?id=' +userid,  
	 httpOptions);  
	  }  

}