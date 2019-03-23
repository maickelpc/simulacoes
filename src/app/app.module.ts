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
import { ProfileComponent } from './admin/profile/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent
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
