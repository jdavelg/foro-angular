//importar modulos del router
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";


//import components
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';


//Array de rutas
export const appRoutes: Routes = [

{ path: '', component: HomeComponent },
{ path: 'inicio', component: HomeComponent },
{ path: 'login',  component: LoginComponent },
{ path: 'registro', component: RegisterComponent },
{ path: 'ajustes', component: UserEditComponent },
{ path: 'temas', component: TopicsComponent },
{ path: 'usuarios', component: UsersComponent },
{ path: 'temas/:page', component: TopicsComponent },
{ path: 'tema/:id', component: TopicDetailComponent },
{ path: 'perfil/:id', component: ProfileComponent },
{ path: 'buscar/:search', component: SearchComponent },
{ path: '**', component: HomeComponent },

]


//export configuracion


export const appRoutingProviders:any[]=[];

export const routing:ModuleWithProviders= RouterModule.forRoot(appRoutes);
