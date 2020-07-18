import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';



@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

 constructor(
   private _router:Router,
private _userService:UserService

 ){}

 canActivate(){
  let identity= this._userService.getIdentity()

  if(identity && identity.name){
    return true
  }else{
    this._router.navigate(['/']);
    return false;
  }
 }
  
  
}
