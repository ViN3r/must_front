import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
    })
  };

  constructor(private http: HttpClient) { }
  utilisateurConnecte: Subject<any> = new Subject<any>();

  authentification(formulaire: any ): Observable<any> {
    return this.http.get<any>(`/api/authentification?email=${formulaire.email}&password=${formulaire.mdp}`, this.optionRequete );
  }

  testApi(): Observable<any> {
      return this.http.get<any>(`/api/hello`, this.optionRequete );
  }
}
