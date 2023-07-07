import { ReferentielService } from './../../../service/referentiel.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ajout-membre',
  templateUrl: './ajout-membre.component.html',
  styleUrls: ['./ajout-membre.component.sass']
})
export class AjoutMembreComponent {

  formMembre: FormGroup;
  obsCategory: Observable<any>
  obsSection: Observable<any>

  constructor(private fb: FormBuilder, private referentielService: ReferentielService) {
    this.obsCategory = this.referentielService.getCategorie();
    this.obsSection = this.referentielService.getSection();
      this.formMembre = this.fb.group({
        nom: null,
        prenom: null
      });
    }
}
