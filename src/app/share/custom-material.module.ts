import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatSidenavModule, 
          MatToolbarModule,
          MatButtonModule,
          MatIconModule,
          MatCardModule,
          MatInputModule,
          MatListModule
         } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatListModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatListModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
