import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  isPlayer: boolean = undefined;

  isPlayerFunction(param) {
    if(param == 'Joueur') {
      this.isPlayer = true;
    } else if (param == 'Donneur'){
      this.isPlayer = false;
    }
    
  }

  getPseudo(form: NgForm){
    form.value['pseudo']
  }

  constructor() { }

  ngOnInit() {
  }

}
