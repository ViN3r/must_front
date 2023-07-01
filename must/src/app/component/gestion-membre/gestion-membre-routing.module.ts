import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionMembreComponent } from './gestion-membre.component';

const routes: Routes = [{ path: '', component: GestionMembreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionMembreRoutingModule { }
