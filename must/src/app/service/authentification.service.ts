import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  authentification(formulaire: any ): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/authentification?email=${formulaire.email}&password=${formulaire.mdp}`, this.optionRequete );
  }
}
