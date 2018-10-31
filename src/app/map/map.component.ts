import { Component, OnInit } from '@angular/core';
import { AdressService } from '../service/adress.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  myLat: number;
  myLng: number;

  constructor(private adressService: AdressService) { }
  adresses = this.adressService.Adresses;
  
  ngOnInit() {
    this.myLat = this.adressService.myLat
    this.myLng = this.adressService.myLng
    console.log(this.adresses);
  }

}
