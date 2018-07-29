import { MatIconRegistry} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const svgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    ir.addSvgIcon('gift', ds.bypassSecurityTrustResourceUrl("assets/images/svg/gift.svg"));
    ir.addSvgIcon('YUAN', ds.bypassSecurityTrustResourceUrl("assets/images/svg/YUAN.svg"));
    ir.addSvgIcon('menu', ds.bypassSecurityTrustResourceUrl("assets/images/svg/menu.svg"));
}