import { Routes } from '@angular/router'


import { HomeComponent } from './home/home.component'
import { LoginComponent } from './security/login/login.component'
import { ProfileComponent } from './admin/profile/profile.component'
import { LoggedInGuard } from './security/loggedin.guard'
import { ArquivoComponent } from './arquivo/arquivo.component';


export const ROUTES: Routes = [
  {path: '', component: HomeComponent, canActivate:[LoggedInGuard]},
  {path: 'envioarquivo', component: ArquivoComponent, canActivate:[LoggedInGuard]},
  {path: 'profile', component: ProfileComponent, canActivate:[LoggedInGuard]},
  {path: 'login/:to', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  //{path: 'home', loadChildren:'./home/home.component#HomeComponent', canLoad:[LoggedInGuard]},
]

export const API = 'http://ceasb.maicke.site';
