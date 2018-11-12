import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { Project } from './../../projects/project.model';
import { ProjectsService } from './../../projects/projects.service';
import { AddProject, LoadProjects, ProjectAdded, ProjectsActionTypes, ProjectsLoaded, UpdateProject, ProjectUpdated, DeleteProject, ProjectDeleted } from './projects.actions';

@Injectable({ providedIn: 'root' })
export class ProjectsEffects {
  @Effect() loadProjects$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.LoadProjects),
    switchMap((action: LoadProjects) =>
      this.projectsService.all()
        .pipe(map((res: Project[]) => new ProjectsLoaded(res)))
    )
  );

  @Effect() addProject$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.AddProject),
    switchMap((action: AddProject) =>
      this.projectsService.create(action.payload)
        .pipe(map((res: Project) => new ProjectAdded(res)))
    )
  );

  @Effect() updateProject$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.UpdateProject),
    switchMap((action: UpdateProject) =>
      this.projectsService.update(action.payload)
        .pipe(map((res: Project) => new ProjectUpdated(res)))
    )
  );

  @Effect() deleteProject$ = this.actions$.pipe(
    ofType(ProjectsActionTypes.DeleteProject),
    switchMap((action: DeleteProject) =>
      this.projectsService.create(action.payload)
        .pipe(map((res: Project) => new ProjectDeleted(res)))
    )
  );

  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService
  ) { }
}
