import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ReferentielService } from 'src/app/service/referentiel.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.sass']
})
export class RosterComponent {

  osbCategory: Observable<any>
  constructor(private referentielService: ReferentielService) {
    this.osbCategory = this.referentielService.getCategorie();
  }
}
