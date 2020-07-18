import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Topic } from 'src/app/models/topic';
import { UserService } from 'src/app/services/user.service';
import { TopicService } from 'src/app/services/topic.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers:[
    UserService,
    TopicService
  ]
})
export class AddComponent implements OnInit {

public page_title:string;
public topic:Topic;
public identity:any;
public token:any;
public status:any;
public is_edit:boolean;

  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _userService:UserService,
    private _topicService:TopicService

  ) { 
    this.page_title="Crear Nuevo tema";
    this.identity= this._userService.getIdentity();
this.token= this._userService.getToken();
this.is_edit=false
    this.topic=new Topic('','','','','','',this.identity._id,null);
  }

  ngOnInit(): void {
  }

  onSubmit(form){
this._topicService.addTopic(this.token, this.topic).subscribe(
  response=>{
    if (response.topic) {
      this.topic=response.topic;
    this.status="success";
    this._router.navigate(['/panel'])
    } else {
      this.status="error";
    }

  },
  error=>{
    console.log(error);
    this.status="error"
  }
)
  
}

}
