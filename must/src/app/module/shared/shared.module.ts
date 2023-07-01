import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonToggleModule,
  ],
  exports: [
    CommonModule,
    MatButtonToggleModule,
    MatTableModule
  ]
})
export class SharedModule { }
