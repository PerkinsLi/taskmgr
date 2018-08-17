import { MatIconRegistry} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const svgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    const imgDir = "assets/images";
    const sideBarDir = `${imgDir}/sidebar`;
    const svgDir = `${imgDir}/svg`;
    const daysDir = `${imgDir}/days`;
    
    ir.addSvgIcon('menu', ds.bypassSecurityTrustResourceUrl(`${svgDir}/menu.svg`));
    ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${sideBarDir}/day.svg`));
    ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${sideBarDir}/month.svg`));
    ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${sideBarDir}/week.svg`));
    ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl(`${sideBarDir}/project.svg`));
    ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${sideBarDir}/projects.svg`));

    const days = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 
        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        25, 26, 27, 28, 29, 30, 31
    ];

    days.forEach(d => ir.addSvgIcon(`day${d}`, ds.bypassSecurityTrustResourceUrl(`${daysDir}/day${d}.svg`)));
}