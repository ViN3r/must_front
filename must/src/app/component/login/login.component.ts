import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from 'src/app/service/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  hide = true;
  authentificationReussi = true;
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    mdp: ['', [Validators.required]]
  });

  utilisateurConnecte: any;
  constructor (private authentificationService: AuthentificationService, private fb: FormBuilder) {
    
  }
  
  ngOnInit() { }
  
  authentification() {
    this.authentificationService.authentification(this.form.value).subscribe(
      {
        next: (res) => {
          this.authentificationService.utilisateurConnecte.next(res);
          this.authentificationReussi = true;
        },
        error: (error) => this.authentificationReussi = false,
      complete: () => { console.log("complete")}}
      );
  }

  testApi() {
    this.authentificationService.testApi().subscribe({
      next: (res) => console.log("OK car authen"),
      error: (error) => console.error("Pas bon", error)
    })
  }
}
