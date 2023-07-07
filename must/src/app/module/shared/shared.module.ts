import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { ListCategorieComponent } from 'src/app/component/composant/list-categorie/list-categorie.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AjoutMembreComponent } from '../../component/dialog/ajout-membre/ajout-membre.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    ListCategorieComponent,
    AjoutMembreComponent,
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    CommonModule,
    MatButtonToggleModule,
    MatTableModule,
    MatDialogModule,
    ListCategorieComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class SharedModule { }
