import {NgModule, ModuleWithProviders} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {InputComponent} from './input/input.component'
import {RadioComponent} from './radio/radio.component'


//Servicos
import { LoginService } from '../security/login/login.service'



@NgModule({
  declarations: [InputComponent, RadioComponent],
  imports:[CommonModule, FormsModule, ReactiveFormsModule],
  exports:[
    InputComponent, RadioComponent,
    CommonModule, FormsModule, ReactiveFormsModule // Estes para que quem improtar o modulo, nao precise REimportar
  ]
})

export class SharedModule{
  static forRoot():ModuleWithProviders{
    return {
      ngModule: SharedModule,
      providers: [
        LoginService
      ]
    }
  }

}
