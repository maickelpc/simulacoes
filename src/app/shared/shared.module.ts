import {NgModule, ModuleWithProviders} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {ChartsModule } from 'ng2-charts'
import { GoogleChartsModule } from 'angular-google-charts';


import {InputComponent} from './input/input.component'
import {RadioComponent} from './radio/radio.component'
import { NotificationService } from './messages/notification.service'


//Servicos
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service'
import { SnackbarComponent } from './messages/snackbar/snackbar.component'
import { LoggedInGuard } from '../security/loggedin.guard';
import { ArquivoService } from '../services/arquivo.service';




@NgModule({
  declarations: [InputComponent, RadioComponent, SnackbarComponent],
  imports:[CommonModule, FormsModule, ReactiveFormsModule, ChartsModule, GoogleChartsModule],
  exports:[
    InputComponent, RadioComponent,SnackbarComponent,ChartsModule,GoogleChartsModule,
    CommonModule, FormsModule, ReactiveFormsModule // Estes para que quem improtar o modulo, nao precise REimportar
  ]
})

export class SharedModule{
  static forRoot():ModuleWithProviders{
    return {
      ngModule: SharedModule,
      providers: [
        LoginService,
        UserService,
        ArquivoService,
        SnackbarComponent,
        NotificationService,
        LoggedInGuard
      ]
    }
  }

}
