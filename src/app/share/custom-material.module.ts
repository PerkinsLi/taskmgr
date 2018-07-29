import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatSidenavModule, 
          MatToolbarModule,
          MatButtonModule,
          MatIconModule,
          MatCardModule,
          MatInputModule
         } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
