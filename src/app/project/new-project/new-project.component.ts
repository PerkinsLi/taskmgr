import { Component, OnInit, Inject } from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styles: []
})
export class NewProjectComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data, 
              private dialogRef: MatDialogRef<NewProjectComponent>,
              private oc: OverlayContainer) { }

  ngOnInit() {
    console.log(JSON.stringify(this.data));
    if(this.data.dark){
      this.oc.getContainerElement().classList.add('myapp-dark-theme');
    } 
  }

  onClick() {
    this.dialogRef.close('I receive a message');
  }

}
