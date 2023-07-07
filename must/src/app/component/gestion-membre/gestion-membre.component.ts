import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AjoutMembreComponent } from '../dialog/ajout-membre/ajout-membre.component';

@Component({
  selector: 'app-gestion-membre',
  templateUrl: './gestion-membre.component.html',
  styleUrls: ['./gestion-membre.component.sass']
})
export class GestionMembreComponent {

  constructor(public fb: FormBuilder, public dialog: MatDialog) { }

  openDialog() {
    console.log("open dialog");
     const dialogRef = this.dialog.open(AjoutMembreComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
