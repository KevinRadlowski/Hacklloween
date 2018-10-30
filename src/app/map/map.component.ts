import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat: number = 45.7461607;
  lng: number = 4.8252459;

  constructor() { }

  ngOnInit() {
  }

}
