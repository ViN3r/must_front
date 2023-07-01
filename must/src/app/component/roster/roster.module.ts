import { SharedModule } from 'src/app/module/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RosterRoutingModule } from './roster-routing.module';
import { RosterComponent } from './roster.component';


@NgModule({
  declarations: [
    RosterComponent
  ],
  imports: [
    CommonModule,
    RosterRoutingModule,
    SharedModule
  ]
})
export class RosterModule { }
