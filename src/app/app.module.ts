import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { RouterModule, PreloadAllModules } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SettingsComponent } from './layout/settings/settings.component';
import { MenuComponent } from './layout/menu/menu.component';
import { LoginComponent } from './security/login/login.component';
import { HomeComponent } from './home/home.component';
import { SharedModule} from './shared/shared.module';
import { ProfileComponent } from './admin/profile/profile.component';
import { ArquivoComponent } from './arquivo/arquivo.component';
import { BlocoComponent } from './bloco/bloco.component';
import { ListagemComponent } from './bloco/listagem/listagem.component';
import { CadastroComponent } from './bloco/cadastro/cadastro.component';
import { CadastroAcelerometroComponent } from './bloco/cadastro-acelerometro/cadastro-acelerometro.component';
import { ListagemAcelerometroComponent } from './bloco/listagem-acelerometro/listagem-acelerometro.component';
import { LeituraComponent } from './leitura/leitura.component'
import { EnvioArquivoBlocoComponent } from './leitura/envio-arquivo-bloco/envio-arquivo-bloco.component';
import { ListagemLeituraBlocoComponent } from './leitura/listagem-leitura-bloco/listagem-leitura-bloco.component';
import { FddComponent } from './fdd/fdd.component';
import { FddService } from './services/fdd.service'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    ArquivoComponent,
    BlocoComponent,
    ListagemComponent,
    CadastroComponent,
    CadastroAcelerometroComponent,
    ListagemAcelerometroComponent,
    LeituraComponent,
    EnvioArquivoBlocoComponent,
    ListagemLeituraBlocoComponent,
    FddComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
    SharedModule.forRoot(),
  ],
  providers: [
    //{provide: LOCALE_ID, useValue:'pt-BR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
