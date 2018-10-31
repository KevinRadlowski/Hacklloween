import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { JoueurComponent } from './joueur/joueur.component';
import { MaisonComponent } from './maison/maison.component';
import { MapComponent } from './map/map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PanierComponent } from './panier/panier.component';
import { ListeBonbonComponent } from './liste-bonbon/liste-bonbon.component';
import { AgmCoreModule } from '@agm/core';
import { MapMarkersComponent } from './map-markers/map-markers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

const appRoutes: Routes = [
  {path: '', redirectTo: 'form', pathMatch: 'full'},
  {path: 'form', component: FormComponent},
  {path: 'joueur/:id', component: JoueurComponent},
  {path: 'maison/:id', component: MaisonComponent},
  ];


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    JoueurComponent,
    MaisonComponent,
    MapComponent,
    NavbarComponent,
    PanierComponent,
    ListeBonbonComponent,
    MapMarkersComponent,
  ],
  entryComponents: [
    PanierComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBNiGHB5tcAsl9ilspi0aqb093Nlvdy5L8'
    }),
    AgmSnazzyInfoWindowModule,
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
