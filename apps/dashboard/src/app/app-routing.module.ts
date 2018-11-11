import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@workshop/ui-login';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path: '', redirectTo: 'projects', pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent },
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
