import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AdressService } from '../service/adress.service'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  isPlayer: boolean = undefined;
  pseudo: string;
  myLat:number;
  myLng:number;
constructor(private router: Router ,private adressService: AdressService) {}
  isPlayerFunction(param) {
    if(param == 'Joueur') {
      this.isPlayer = true;
    } else if (param == 'Donneur'){
      this.isPlayer = false;
    }
    
  }

  getPseudo(form: NgForm){
    this.pseudo = form.value['pseudo'];
  }

  route(usertype) {
    switch (usertype){
      case 'joueur':
      this.router.navigate(['joueur/' + this.pseudo]);
      break;
      
      case 'maison':
      this.router.navigate(['maison/' + this.pseudo]);
      break;
    }
  }

  displayLocationInfo = (position) => {
    this.myLng = position.coords.longitude;
    this.myLat = position.coords.latitude;
    this.adressService.getAdress(this.myLng, this.myLat)
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
    }
  }

}