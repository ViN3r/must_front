import { AuthentificationService } from 'src/app/service/authentification.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  utilisateurConnecte: any
  constructor(public authentificationService: AuthentificationService, public router: Router) { }
  
  ngOnInit(): void {
    this.authentificationService.utilisateurConnecte.subscribe({
          next: (utilisateurConnecte) => {
          this.utilisateurConnecte = utilisateurConnecte;
          }
      })
  }

  open(route: string) {
    this.router.navigateByUrl(`${route}`);
  }
}
