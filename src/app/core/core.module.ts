import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from './custom-material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CustomMaterialModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule){
    if(parent) {
      throw new Error("该模块已经存在，不能再次加载！");
    }
  }
 }
