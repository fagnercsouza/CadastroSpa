import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { AppComponent } from './app.component';
import { ProfessoresComponent } from './professores/professores.component';


const routes: Routes = [
  // { path: '', component: AppComponent},
  { path: 'alunos', component: AlunosComponent},
  { path: 'professores', component: ProfessoresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
