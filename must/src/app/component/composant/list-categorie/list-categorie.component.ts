import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ReferentielService } from 'src/app/service/referentiel.service';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.sass']
})
export class ListCategorieComponent {

  @Input() obsElement: Observable<any> | undefined;
  constructor(private referentielService: ReferentielService) {
    //this.osbCategory = this.referentielService.getCategorie();
  }
}
