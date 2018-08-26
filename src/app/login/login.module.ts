import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import {LoginRoutesModule} from './login.routing';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    ShareModule,
    LoginRoutesModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
]
})
export class LoginModule { }
