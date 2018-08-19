import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  MatSidenavModule, 
          MatToolbarModule,
          MatButtonModule,
          MatIconModule,
          MatCardModule,
          MatInputModule,
          MatListModule,
          MatSlideToggleModule
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
    MatListModule,
    MatSlideToggleModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
