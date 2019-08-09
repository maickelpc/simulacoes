import {NgModule, ModuleWithProviders} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
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
import { FddService } from '../services/fdd.service';
import { ArquivoService } from '../services/arquivo.service';
import { BlocoService } from '../services/bloco.service';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import { ConfirmationPopoverModule} from 'angular-confirmation-popover'
import {AutocompleteLibModule} from 'angular-ng-autocomplete';






@NgModule({
  declarations: [InputComponent, RadioComponent, SnackbarComponent,ConfirmDialogComponent ],
  imports:[CommonModule,
    FormsModule,
  //  ReactiveFormsModule,
    ChartsModule,
    GoogleChartsModule,
    ConfirmationPopoverModule.forRoot({confirmButtonType:'danger'}),
    AutocompleteLibModule
  ],
  exports:[
    InputComponent, RadioComponent,SnackbarComponent, ConfirmDialogComponent,
    ChartsModule,GoogleChartsModule,
    CommonModule, FormsModule, ConfirmationPopoverModule,
    AutocompleteLibModule
    //ReactiveFormsModule // Estes para que quem improtar o modulo, nao precise REimportar
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
        FddService
      ],

    }
  }

}
