import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  constructor(private UserService : UserService){ }
  
  canActivate() {
    if(this.UserService.isuserLoggedin()){
    return true;
  } else{

    alert("Your not authorised")

    return false;
  }
  
}
}