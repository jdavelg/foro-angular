import { Injectable, DoCheck } from '@angular/core';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from "./global";

@Injectable({
  providedIn: 'root'
})
export class UserService implements DoCheck {
public url;
public identity:any;
public token:any

  constructor(
    private _http:HttpClient
  ) {

    this.url= global.url
   }


   ngDoCheck(): void {
    this.identity;
      
    }


  prueba(){
   return "hola mundo desde user service"
    
  }

  register(user):any{

//convertir onjeto a Json string

let params= JSON.stringify(user);

//definir cabeceras
let headers= new HttpHeaders().set('Content-Type', 'application/json')
//hacer peticion ajax
return this._http.post(this.url+'register', params, {headers:headers})
  }

  signup(user, gettoken=null):any{
//comprobar si llega el gettoken

if(gettoken!=null){

user.gettoken=gettoken;
}
let params= JSON.stringify(user);
let headers= new HttpHeaders().set('Content-Type', 'application/json');

return this._http.post(this.url+'login', params, {headers:headers})

  }

  getIdentity(){
let identity= JSON.parse(localStorage.getItem('identity'));
if (identity && identity!=null || identity!= "undefined") {
  this.identity=identity
}else{
this.identity=null
}
return this.identity;
  }

  getToken(){
    let token= localStorage.getItem('token');
    if (token && token!=null || token!= "undefined") {
      this.token=token
    }else{
    this.token=null
    }
    return this.token;
      }

     update(user):any{

let params= JSON.stringify(user);
let headers= new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken());

return this._http.put(this.url+'user/update', params, {headers:headers})

     } 

     getUsers():any{
return this._http.get(this.url+'users')
     }
    

     getUser(userId):any{
      return this._http.get(this.url+'user/'+userId)

     }
  

}
