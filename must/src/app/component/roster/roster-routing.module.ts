import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RosterComponent } from './roster.component';
import { SharedModule } from 'src/app/module/shared/shared.module';

const routes: Routes = [{ path: '', component: RosterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})
export class RosterRoutingModule { }
