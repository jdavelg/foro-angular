import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/services/topic.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Topic } from 'src/app/models/topic';


@Component({
  selector: 'app-search',
  templateUrl: '../topics/topics.component.html',
  styleUrls: ['./search.component.css'],
  providers:[TopicService]
})
export class SearchComponent implements OnInit {

  public page_title:string;
  public topics:Array<Topic>
  public no_paginate:boolean;
  public totalPages;
  public page;
  public next_page;
  public prev_page;
public number_pages;

public status:string;

  constructor(
private _route:ActivatedRoute,
private _router:Router,
private _topicService:TopicService
  ) { 
this.page_title="Buscar";
this.no_paginate=true;

  }


  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      var search= params['search']
this.page_title=this.page_title+' '+search;
      this.getTopics(search);

    })
  }

  getTopics(search){
this._topicService.search(search).subscribe(
  response=>{
if(response.topics){
this.topics= response.topics;
this.no_paginate=true
}
  },
  error=>{
    console.log(error);
    
  }
)

  }
  

}
