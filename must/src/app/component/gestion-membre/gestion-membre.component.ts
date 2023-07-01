import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gestion-membre',
  templateUrl: './gestion-membre.component.html',
  styleUrls: ['./gestion-membre.component.sass']
})
export class GestionMembreComponent {

  formMembre: FormGroup;
  constructor(public fb: FormBuilder) {
    this.formMembre = this.fb.group({
      nom: null
    });
  }
}
