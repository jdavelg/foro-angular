import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { global } from 'src/app/services/global';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers:[
    UserService
  ]
})
export class UserEditComponent implements OnInit {
public page_title:string
public user:User;
public identity:any;
public token:any;
public status:any;
public url:any;

public afuConfig:any;

  constructor(
    private _router:Router,
    private _route:ActivatedRoute,
    private _userService:UserService
  ) {
    this.page_title="Edita tu Informacion de Usuario";
    this.identity=this._userService.getIdentity();
    this.token=this._userService.getToken();
    this.user=this.identity;
this.url=global.url

this.afuConfig={
  multiple:false,
  formatsAllowed: ".jpg, .jpeg, .png, .gif",
  maxSize: "50",
  uploadAPI:{
    url: this.url+"upload-avatar",
    headers:{
      "Authorization": this.token
    }
  },
  theme:"attachPin",
  hideProgressBar:false,
  hideResetBtn:true,
  hideSelectBtn:false,
  attachPinText:'sube tu foto',
  attachPinBtn:'Upload Failed'
}
  }

  ngOnInit(): void {
  }
  avatarUpload(data){
    let data_obj=JSON.parse(data.response)
  this.user.image=data_obj.user.image;
  console.log(this.user);
  
  }

  onSubmit(form){
this._userService.update(this.user).subscribe(
  response=>{
if(!response.user){
  this.status="error"
}else{
  this.status="success";
  localStorage.setItem('identity', JSON.stringify(this.user))

}
  },
  error=>{
    console.log(error);
    this.status="error"
    
  }
)
  }

}
