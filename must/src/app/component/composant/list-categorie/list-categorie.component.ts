import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ReferentielService } from 'src/app/service/referentiel.service';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.sass']
})
export class ListCategorieComponent {

  @Input() obsElement: Observable<any> | undefined;
  @Input() champs = new FormControl();

  constructor(private referentielService: ReferentielService) {
    //this.osbCategory = this.referentielService.getCategorie();
  }
}
