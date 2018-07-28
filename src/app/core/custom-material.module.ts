import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule
  ],
  declarations: []
})
export class CustomMaterialModule { }
