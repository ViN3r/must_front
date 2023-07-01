import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AuthentificationService } from './service/authentification.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BasDePageComponent } from './component/bas-de-page/bas-de-page.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { RosterModule } from './component/roster/roster.module';
import { SharedModule } from './module/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    BasDePageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    RosterModule,
    SharedModule
  ],
  providers: [AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
