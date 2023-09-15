import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  optionRequete = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  addMembre(membre: any): Observable<any> {
    return this.http.post<any>(`/api/membres`,JSON.stringify(membre), this.optionRequete );
  }

  getMembres(pageIndex: number, pageSize: number): Observable<any> {
    return this.http.get<any>(`/api/membres?pageIndex=${pageIndex}&pageSize=${pageSize}`);
  }
}
