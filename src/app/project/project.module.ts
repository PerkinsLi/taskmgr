import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InviteComponent } from './invite/invite.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectItemComponent } from './project-item/project-item.component';
import { ProjectListComponent } from './project-list/project-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProjectItemComponent,
    ProjectListComponent,
    InviteComponent,
    NewProjectComponent,
  ],
  entryComponents: [
    InviteComponent,
    NewProjectComponent
  ]
})
export class ProjectModule { }
