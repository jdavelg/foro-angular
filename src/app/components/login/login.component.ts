import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    UserService
  ]
})
export class LoginComponent implements OnInit {
  public user: any;
  public page_title: string;
  public status: any;
  public identity: any;
public token:any;
  constructor(
    private _userService: UserService,
    private _router:Router,
    private _route:ActivatedRoute
  ) {
    this.page_title = "Identificate";
    this.user = new User('', '', '', '', '', '', 'ROLE_USER');
  }

  ngOnInit(): void {
  }

  onSubmit(form) {
    //conseguir objeto completo completo de usuario
    this._userService.signup(this.user).subscribe(
      response => {
        if (response.user && response.user._id) {

          this.identity = response.user
//guardar en el localStorage

localStorage.setItem('identity', JSON.stringify(this.identity))

          //Conseguir Token de Usuario


this._userService.signup(this.user, true ).subscribe(
  response=>{
if(response.token ){


//guardar el token de usuario en una propiedad
this.token = response.token

localStorage.setItem('token', this.token);
this.status="success"
this._router.navigate(['/inicio'])

}else{
this.status="error"
}

  },
  error=>{
   this.status="error";
   console.log(error);
   
  }
)

        } else {
          this.status = "error"
        }

      },
      error => {
        this.status = "error";
        console.log(error);

      }
    )

  }

}
