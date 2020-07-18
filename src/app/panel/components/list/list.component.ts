import { Component, OnInit,DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Topic } from 'src/app/models/topic';
import { UserService } from 'src/app/services/user.service';
import { TopicService } from 'src/app/services/topic.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[
    UserService,
    TopicService
  ]
})
export class ListComponent implements OnInit, DoCheck {
  public page_title:string;
  public topics: Array<Topic>;
  public identity:any;
  public token:any;
  public status:any;
  


  constructor(
    private _route:ActivatedRoute,
    private _router:Router,
    private _userService:UserService,
    private _topicService:TopicService

  ) {
    this.page_title="Mis Temas";
    this.identity= this._userService.getIdentity();
this.token= this._userService.getToken();

   
   }

  ngOnInit(): void {
    this.getTopics();
  }
  ngDoCheck(): void {
 
 
  }

  getTopics(){
var UserId= this.identity._id;
this._topicService.getTopicsByUser(UserId).subscribe(
  response=>{
if(response.topics){
  this.topics=response.topics
}else{
  this.status="error"
}


  },
  error=>{
    console.log(error);
    this.status="error"
    
  }
)
  }

  deleteTopic(id){
this._topicService.delete(this.token, id).subscribe(
  response=>{
    this.status="success";
console.log(response);

  },
  error=>{
    console.log(error);
    
    this.status="error"
  }
)
  }

}
