import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

  authentification( email: string, password: string ): Observable<any> {
    return this.http.get<any>('/api/authentification');
  }
}
