import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  loginuser } from './loginuser';
import { HttpClient,} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient) { }

  url =  'https://localhost:7070/Api/Login';

  CreateloginUser(user: loginuser): Observable<loginuser> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<loginuser>(this.url ,  
    user,httpOptions
  );

  
}



}
