import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjetComponent } from './projet/projet.component';
import { ProjetListComponent } from './projet-list/projet-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleProjetComponent } from './single-projet/single-projet.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetComponent,
    ProjetListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleProjetComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
