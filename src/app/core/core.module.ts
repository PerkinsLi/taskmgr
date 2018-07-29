import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { MatIconRegistry} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ShareModule } from '../share/share.module';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';


import { svgResources } from '../utils/svg_utils';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    ShareModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ShareModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule,
              ir: MatIconRegistry, 
              ds: DomSanitizer){
    if(parent) {
      throw new Error("该模块已经存在，不能再次加载！");
    }
    // load svg photo
    svgResources(ir, ds);

  }
 }
