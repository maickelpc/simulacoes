import { Routes } from '@angular/router'


import { HomeComponent } from './home/home.component'
import { LoginComponent } from './security/login/login.component'
import { ProfileComponent } from './admin/profile/profile.component'
import { LoggedInGuard } from './security/loggedin.guard'
import { ArquivoComponent } from './arquivo/arquivo.component';
import { BlocoComponent } from './bloco/bloco.component';
import { CadastroComponent } from './bloco/cadastro/cadastro.component';
import { ListagemComponent } from './bloco/listagem/listagem.component';
import { CadastroAcelerometroComponent } from './bloco/cadastro-acelerometro/cadastro-acelerometro.component';
import { ListagemAcelerometroComponent } from './bloco/listagem-acelerometro/listagem-acelerometro.component';
import { LeituraComponent } from './leitura/leitura.component';
import { EnvioArquivoBlocoComponent } from './leitura/envio-arquivo-bloco/envio-arquivo-bloco.component';
import { ListagemLeituraBlocoComponent } from './leitura/listagem-leitura-bloco/listagem-leitura-bloco.component';
import { FddComponent } from './fdd/fdd.component'
import { FddFormComponent } from './fdd/fdd-form/fdd-form.component'


export const ROUTES: Routes = [
  {path: '', component: HomeComponent, canActivate:[LoggedInGuard]},
  {path: 'envioarquivo', component: ArquivoComponent, canActivate:[LoggedInGuard]},
  {
    path: 'blocos', component: BlocoComponent, canActivate:[LoggedInGuard],
    children:[
      {path: '', component: ListagemComponent, canActivate:[LoggedInGuard]},
      {path: 'cadastro/:id', component: CadastroComponent, canActivate:[LoggedInGuard]},
      {path: 'cadastro', component: CadastroComponent, canActivate:[LoggedInGuard]},
      {path: 'listagem', component: ListagemComponent, canActivate:[LoggedInGuard]},
      {path: 'acelerometros', component: ListagemAcelerometroComponent, canActivate:[LoggedInGuard]},
      {path: 'acelerometros/cadastro/:id', component: CadastroAcelerometroComponent, canActivate:[LoggedInGuard]},
      {path: 'acelerometros/cadastro', component: CadastroAcelerometroComponent, canActivate:[LoggedInGuard]}
    ]
  },
  {
    path: 'leitura', component: LeituraComponent, canActivate:[LoggedInGuard],
    children:[
      {path: '', component: ListagemLeituraBlocoComponent, canActivate:[LoggedInGuard]},
      {path: 'envio/:id', component: EnvioArquivoBlocoComponent, canActivate:[LoggedInGuard]},
      {path: 'envio', component: EnvioArquivoBlocoComponent, canActivate:[LoggedInGuard]}
    ]
  },
  {path: 'fdd', component: FddComponent, canActivate:[LoggedInGuard]},
  {path: 'fdd/novo', component: FddFormComponent, canActivate:[LoggedInGuard]},
  {path: 'profile', component: ProfileComponent, canActivate:[LoggedInGuard]},
  {path: 'login/:to', component: LoginComponent},
  {path: 'login', component: LoginComponent},
]
