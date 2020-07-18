import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from '../app/app.routing';
import { AngularFileUploaderModule } from "angular-file-uploader";
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';


import { MomentModule } from 'angular2-moment';
import { PanelModule } from './panel/panel.module';
import { NgxHighlightJsModule } from '@nowzoo/ngx-highlight-js';

import { UserGuard } from './services/user.guard';
import { UserService } from './services/user.service';
import { NoIdentityGuard } from './services/no.identity.guard';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';





  


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    TopicsComponent,
    TopicDetailComponent,
    UsersComponent,  
    UserEditComponent, ProfileComponent, SearchComponent 

  ],
  imports: [
    BrowserModule,
    FormsModule ,
    routing,
    ReactiveFormsModule,
    AngularFileUploaderModule,
    CommonModule,
  
    HttpClientModule,
    PanelModule,
    MomentModule ,
    NgxHighlightJsModule.forRoot(),
         
  ],
  providers: [
    appRoutingProviders,
    UserService,
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
