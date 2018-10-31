import { Component } from '@angular/core';
import { AdressService } from './service/adress.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isPlayer = true;
  constructor(private adressService: AdressService) {}

  
  ngonInit() {

  }

}

