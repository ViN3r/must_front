import { AuthentificationService } from 'src/app/service/authentification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  utilisateurConnecte: any
  constructor(public authentificationService: AuthentificationService) { }
  
  ngOnInit(): void {
    this.authentificationService.utilisateurConnecte.subscribe({
          next: (utilisateurConnecte) => {
          this.utilisateurConnecte = utilisateurConnecte;
          }
      })
  }

}
