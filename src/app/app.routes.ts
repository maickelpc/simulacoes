import { Routes } from '@angular/router'


import { HomeComponent } from './home/home.component'
import { LoginComponent } from './security/login/login.component'
import { ProfileComponent } from './admin/profile/profile.component'
import { LoggedInGuard } from './security/loggedin.guard'
import { ArquivoComponent } from './arquivo/arquivo.component';
import { BlocoComponent } from './bloco/bloco.component';
import { CadastroComponent } from './bloco/cadastro/cadastro.component';
import { ListagemComponent } from './bloco/listagem/listagem.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent, canActivate:[LoggedInGuard]},
  {path: 'envioarquivo', component: ArquivoComponent, canActivate:[LoggedInGuard]},
  {
    path: 'blocos', component: BlocoComponent, canActivate:[LoggedInGuard],
    children:[
      {path: '', redirectTo:'listagem', pathMatch:'full'},
      {path: 'cadastro/:id', component: CadastroComponent, canActivate:[LoggedInGuard]},
      {path: 'cadastro', component: CadastroComponent, canActivate:[LoggedInGuard]},
      {path: 'listagem', component: ListagemComponent, canActivate:[LoggedInGuard]},
    ]
  },
  {path: 'profile', component: ProfileComponent, canActivate:[LoggedInGuard]},
  {path: 'login/:to', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  //{path: 'home', loadChildren:'./home/home.component#HomeComponent', canLoad:[LoggedInGuard]},
]

export const API = 'http://ceasb.maicke.site';
