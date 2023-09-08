import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionMembreComponent } from './gestion-membre.component';
import { authGuard } from 'src/app/guard/auth.guard';

const routes: Routes = [{ path: '', component: GestionMembreComponent, canActivate: [authGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionMembreRoutingModule { }
