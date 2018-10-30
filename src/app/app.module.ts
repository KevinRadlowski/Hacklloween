import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { JoueurComponent } from './joueur/joueur.component';
import { MaisonComponent } from './maison/maison.component';
import { FormJoueurComponent } from './form-joueur/form-joueur.component';
import { FormMaisonComponent } from './form-maison/form-maison.component';
import { MapComponent } from './map/map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PanierComponent } from './panier/panier.component';
import { QuestionComponent } from './question/question.component';
import { QuestionCreationComponent } from './question-creation/question-creation.component';
import { ListeBonbonComponent } from './liste-bonbon/liste-bonbon.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    JoueurComponent,
    MaisonComponent,
    FormJoueurComponent,
    FormMaisonComponent,
    MapComponent,
    NavbarComponent,
    PanierComponent,
    QuestionComponent,
    QuestionCreationComponent,
    ListeBonbonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
