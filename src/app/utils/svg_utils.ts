import { MatIconRegistry} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const svgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    const imgDir = "assets/images";
    const sideBarDir = `${imgDir}/sidebar`;
    const svgDir = `${imgDir}/svg`;
    const daysDir = `${imgDir}/days`;
    const avatar = `${imgDir}/avatar`;
    
    ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatar}/avatars.svg`));
    ir.addSvgIcon('menu', ds.bypassSecurityTrustResourceUrl(`${svgDir}/menu.svg`));
    ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${sideBarDir}/day.svg`));
    ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${sideBarDir}/month.svg`));
    ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${sideBarDir}/week.svg`));
    ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl(`${sideBarDir}/project.svg`));
    ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${sideBarDir}/projects.svg`));

    for(let i=1; i <32; i++) {
        ir.addSvgIcon(`day${i}`, ds.bypassSecurityTrustResourceUrl(`${daysDir}/day${i}.svg`))
    }

}