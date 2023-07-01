import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionMembreRoutingModule } from './gestion-membre-routing.module';
import { GestionMembreComponent } from './gestion-membre.component';
import { SharedModule } from 'src/app/module/shared/shared.module';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    GestionMembreComponent
  ],
  imports: [
    CommonModule,
    GestionMembreRoutingModule,
    SharedModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class GestionMembreModule { }
