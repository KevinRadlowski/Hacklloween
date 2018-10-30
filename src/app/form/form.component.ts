import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  isPlayer: boolean = undefined;
  pseudo: string;
constructor(private router: Router ) {}
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



  ngOnInit() {
  }

}