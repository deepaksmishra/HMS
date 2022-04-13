import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  constructor(private userservice:UserService,private router:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.userservice.isAdminrights()){
      return true;
    }
    else{
      alert("You are not authorized to access this page");
      this.router.navigate(['home']);
      return false;
    }
  }
}
