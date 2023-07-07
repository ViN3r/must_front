import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ReferentielService {

  optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
    })
  };

  constructor(private http: HttpClient) { }

  getSection(): Observable<any> {
    return this.http.get<any>(`/api/referentiel/section`, this.optionRequete );
  }

  getCategorie(): Observable<any> {
    return this.http.get<any>(`/api/referentiel/categorie`, this.optionRequete );
  }
}
