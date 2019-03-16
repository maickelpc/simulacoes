import { Routes } from '@angular/router'


import { HomeComponent } from './home/home.component'
import { LoginComponent } from './security/login/login.component'
import { LoggedInGuard } from './security/loggedin.guard'


export const ROUTES: Routes = [
  {path: '', component: HomeComponent, canActivate:[LoggedInGuard]},
  {path: 'login/:to', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  //{path: 'home', loadChildren:'./home/home.component#HomeComponent', canLoad:[LoggedInGuard]},
]

export const API = 'http://ceasb.maicke.site';
