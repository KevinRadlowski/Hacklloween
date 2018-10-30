import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { AgmCoreModule } from '@agm/core';
import { MapMarkersComponent } from './map-markers/map-markers.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    ListeBonbonComponent,
    MapMarkersComponent
  ],
  entryComponents: [
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBNiGHB5tcAsl9ilspi0aqb093Nlvdy5L8'
    }),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
