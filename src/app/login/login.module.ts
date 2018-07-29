import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import {LoginRoutesModule} from './login.routing';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    ShareModule,
    LoginRoutesModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
