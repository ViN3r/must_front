import { NgModule } from '@angular/core';
import { LoginComponent } from './component/login/login.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'roster', loadChildren: () => import('./component/roster/roster.module').then(m => m.RosterModule) },
  { path: 'adherents', loadChildren: () => import('./component/gestion-membre/gestion-membre.module').then(m => m.GestionMembreModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
