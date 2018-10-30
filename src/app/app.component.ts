import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isPlayer = true;
  pseudo: string ;
  myLat: number;
  myLng: number;
  constructor(private router: Router) {}
  submitSubForm() {
    switch (this.isPlayer) {
      case true:
        this.router.navigate(['joueur/' + this.pseudo]);
        break;

      case false:
        this.router.navigate(['maison/' + this.pseudo]);
        break;
    }
  }

  displayLocationInfo = (position) => {
    this.myLng = position.coords.longitude;
    this.myLat = position.coords.latitude;
  }

  ngonInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
    }
  }

}

