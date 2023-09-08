import { ReferentielService } from './../../../service/referentiel.service';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MembreService } from 'src/app/service/membre.service';

@Component({
  selector: 'app-ajout-membre',
  templateUrl: './ajout-membre.component.html',
  styleUrls: ['./ajout-membre.component.sass']
})
export class AjoutMembreComponent {

  formMembre: FormGroup;
  obsCategory: Observable<any>
  obsSection: Observable<any>
  obsTypeMembre: Observable<any>

  constructor(private fb: FormBuilder, private referentielService: ReferentielService, private membreService: MembreService) {
    this.obsCategory = this.referentielService.getCategorie();
    this.obsSection = this.referentielService.getSection();
    this.obsTypeMembre = this.referentielService.getTypeMembre();

      this.formMembre = this.fb.group({
        nom: [null,  Validators.required],
        prenom: [null, Validators.required],
        typeMembre: [null, Validators.required],
        categorie: [null],
        section: [null],
        id:[null]
      });
  }
  

  save() {
    console.log(this.formMembre.value);
    this.membreService.addMembre(this.formMembre.value).subscribe(
      {
        complete: () => console.log("Success!"),
        error: () => console.log("Error!"),
        next : () => console.log("Next!"),
        
      }
    )
  }

  getControl(champ: string): FormControl {
    return this.formMembre.controls[champ] as FormControl;
  }
}
