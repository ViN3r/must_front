import { Component } from '@angular/core';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  constructor (private authentificationService: AuthentificationService) {}
  
  authentification() {
    console.log('authentification');
    this.authentificationService.authentification('', '').subscribe(
      {next : (res) =>  console.log('authentification reussi ', res),
      error:  (error) => console.log('authentification failed', error)}
      );
  }
}
