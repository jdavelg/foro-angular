import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from "./global";




@Injectable({
  providedIn: 'root'
})
export class CommentService {

  
public url:string;

constructor(
private _http: HttpClient,


) {
  this.url=global.url;
 }

 prueba(){
   return "Hola mundo desde Topic Service"
 }

 add(token, comment,topicId):any{
   let params= JSON.stringify(comment);
   let headers= new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);

   return this._http.post(this.url+'comment/topic/'+topicId, params, {headers:headers})

 }

 getTopicsByUser(userId):any{
let headers= new HttpHeaders().set('Content-Type', 'application/json');
return this._http.get(this.url+'user-topics/'+userId, {headers:headers})

 }

getTopic(id):any{


return this._http.get(this.url+'topic/'+id);
}



delete(token, topicId,commentId):any{
let headers= new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token);


return this._http.delete(this.url+'comment/'+topicId+'/'+commentId, {headers:headers})
}




}
