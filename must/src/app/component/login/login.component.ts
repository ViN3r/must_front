import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor (private authentificationService: AuthentificationService, private fb: FormBuilder) {
    
  }
  

  authentification() {
    console.log('authentification', this.form.value);
    this.authentificationService.authentification(this.form.value).subscribe(
      {next : (res) =>  console.log('authentification reussi ', res),
      error:  (error) => console.log('authentification failed', error),
    complete: () => { console.log("ici")}}
      );
  }
}
