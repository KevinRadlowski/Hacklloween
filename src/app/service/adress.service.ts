import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdressService implements OnInit {
/*LISTE ADRESSE DURE*/
Adresses = [
  {nom: 'adresse 1', latitude: 45.745993, longitude: 4.825433, adresse: '52 Cours Suchet',intitule: "De quelle film est tirée la chanson 'Bienvenu à Holloween ?'"},
  {nom: 'adresse 2', latitude: 45.745319, longitude: 4.827207, adresse: '13 Quai Perrache',intitule: "Quelle est l'origine de la fête d'Halloween ?"},
  {nom: 'adresse 3', latitude: 45.745814, longitude: 4.825983, adresse: '58 Cours Suchet',intitule: "Comment dit-on 'citrouille' en anglais ?"},
  {nom: 'adresse 4', latitude: 45.745653, longitude: 4.824993, adresse: '20-28 Rue Smith',intitule: "En Grande-Bretagne, comment appelait-on autrefois la fête d'Halloween ?"},
  {nom: 'adresse 5', latitude: 45.74560, longitude: 4.823963, adresse: '7-1 Rue Marc-Antoine Petit',intitule: "Dans les années 1920, comment ce nommait les lanternes de la fête d'Halloween ?"},
  {nom: 'adresse 6', latitude: 45.745223, longitude: 4.826085, adresse: '16-28 Rue Delandine',intitule: "Quelles sont les deux couleures indisociable d'Halloween ?"},
  {nom: 'adresse 7', latitude: 45.744008, longitude: 4.825087, adresse: '30-44 Rue Delandine',intitule: "Quel est de coutume de chasser le soir d'Halloween ?"},
  {nom: 'adresse 8', latitude: 45.743920, longitude: 4.823522, adresse: '51-41 Rue Smith',intitule: "Quel nom porte le gâteau commercialisé pour la fête d'Halloween ?"},
  {nom: 'adresse 9', latitude: 45.748186, longitude: 4.827603, adresse: '12 Rue du Bélier',intitule: "Selon la croyance, les personnes nées le jour d'Halloween ont un talent en particulier, lequel ?"},
  {nom: 'adresse 10', latitude: 45.747742, longitude: 4.823745, adresse: ' 15-7 Rue Gilibert',intitule: "Selon la croyance, que signifie voir une araignée le jour d'Halloween ?"},
]



housenumber:number;
street:string;
city:string;
zipcode:number;
myLng:number;
myLat:number;
lat:number;
lng:number;
adress = [];
returned:any;
private aroundAdress1 = 'https://api-adresse.data.gouv.fr/search/?q=';
private aroundAdress2 = '&postcode='
private aroundAdress3 = '&type=street&limit=4'
private positionUrl = 'https://api-adresse.data.gouv.fr/reverse/?lon='
private positionUrl2 = '&lat='
curentPosition:string;
  constructor(private Http:HttpClient) { }
  getAdress (myLng, myLat) {
    this.myLng = myLng;
    this.myLat = myLat;
    console.log(this.myLat, this.myLng);
    this.curentPositionurl();

  }

  getAroundLocation(){
    this.Http.get(this.aroundAdress1 + this.city + this.aroundAdress2 + this.zipcode + this.aroundAdress3).subscribe(function(data:any){ this.returned = data; console.log(this.returned)})
  }

  curentPositionurl() {
    this.Http.get(this.positionUrl + this.myLng + this.positionUrl2 + this.myLat ).subscribe(function(data:any) { this.city = data.features[0].properties.city; this.zipcode = data.features[0].properties.zipcode; this.street = data.features[0].properties.street; this.housenumber = data.features[0].properties.housenumber ; } )
    
    this.getAroundLocation()
  }

  ngOnInit() {
  }

}
