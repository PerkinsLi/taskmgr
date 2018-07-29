import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './custom-material.module'

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [
    CommonModule,
    CustomMaterialModule
  ],
  declarations: []
})
export class ShareModule { }
