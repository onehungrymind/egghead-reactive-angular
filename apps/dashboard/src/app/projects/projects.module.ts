import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { MaterialModule } from '@workshop/material';
import { FormsModule } from '@angular/forms';
import { CoreDataModule } from '@workshop/core-data';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    CoreDataModule,
  ],
  declarations: [
    ProjectsComponent,
    ProjectsListComponent,
    ProjectDetailsComponent,
  ],
  exports: [
    ProjectsComponent,
  ]
})
export class ProjectsModule { }
