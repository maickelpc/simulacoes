import { Routes } from '@angular/router'


import { HomeComponent } from './home/home.component'
import { LoginComponent } from './security/login/login.component'


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
]

export const API = 'http://ceasb.maicke.site';
