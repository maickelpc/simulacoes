import {NgModule, ModuleWithProviders} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {ChartsModule } from 'ng2-charts'
import { GoogleChartsModule } from 'angular-google-charts';

import {InputComponent} from './input/input.component'
import {RadioComponent} from './radio/radio.component'
import { NotificationService } from './messages/notification.service'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Servicos
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service'
import { SnackbarComponent } from './messages/snackbar/snackbar.component'
import { LoggedInGuard } from '../security/loggedin.guard';
import { ArquivoService } from '../services/arquivo.service';
import { BlocoService } from '../services/bloco.service';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {ConfirmDialogService} from './confirm-dialog/confirm-dialog.service';




@NgModule({
  declarations: [InputComponent, RadioComponent, SnackbarComponent, ConfirmDialogComponent],
  imports:[CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    GoogleChartsModule,
    NgbModule
  ],
  exports:[
    InputComponent, RadioComponent,SnackbarComponent, ConfirmDialogComponent, ChartsModule,GoogleChartsModule,
    CommonModule, FormsModule, ReactiveFormsModule,NgbModule // Estes para que quem improtar o modulo, nao precise REimportar
  ],
  entryComponents: [ ConfirmDialogComponent ]
})

export class SharedModule{
  static forRoot():ModuleWithProviders{
    return {
      ngModule: SharedModule,
      providers: [
        LoginService,
        UserService,
        ArquivoService,
        BlocoService,
        SnackbarComponent,
        NotificationService,
        LoggedInGuard,
        ConfirmDialogService
      ],

    }
  }

}
