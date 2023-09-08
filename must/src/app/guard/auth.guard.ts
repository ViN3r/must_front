import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthentificationService } from '../service/authentification.service';

export const authGuard: CanActivateFn = (route, state) => {
  var isLogged = false
  const authService = inject(AuthentificationService);

  authService.utilisateurConnecte.subscribe({
    next: () => isLogged = true
  })
 return isLogged;
};
