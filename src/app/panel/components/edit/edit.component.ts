import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Topic } from 'src/app/models/topic';
import { UserService } from 'src/app/services/user.service';
import { TopicService } from 'src/app/services/topic.service';


@Component({
  selector: 'app-edit',
  templateUrl: '../add/add.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[
    UserService,
    TopicService
  ]
})
export class EditComponent implements OnInit {
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
    this.page_title="Editar Tema";
    this.identity= this._userService.getIdentity();
this.token= this._userService.getToken();
this.is_edit=true
    this.topic=new Topic('','','','','','',this.identity._id,null);
  }

  ngOnInit(): void {
    this.getTopic();
  }

getTopic():any{
  this._route.params.subscribe(params=>{
    let id= params['id'];
    console.log(id);
    
    this._topicService.getTopic(id).subscribe(
      response=>{
if (!response.topic) {
  this._router.navigate(['/panel'])
  
}else{
  this.topic= response.topic
}


      },
      error=>{
        console.log(error);
        
      }
    )
  })
}

onSubmit(form){
  var id= this.topic._id;
  this._topicService.update(this.token, id, this.topic).subscribe(
response=>{
if(response.topic){
  this.status="success";
  this.topic= response.topic

}else{
  this.status="error"
}

},
error=>{
this.status= "error"
}
  )
}

}
