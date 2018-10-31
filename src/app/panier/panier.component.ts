import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BonbonService } from "../service/bonbon.service"

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})


export class PanierComponent implements OnInit {
  @Input() name;

  bonbonDispo= [];

  constructor(private bonbonservice: BonbonService,
              public activeModal: NgbActiveModal) {}
              


              ngOnInit() {
                let notrandom:number;
                let random:number;
                let i= 0;
                while ( i < 10 ){
                  random = Math.floor(Math.random() * Math.floor(10));
                  if( random != notrandom){
                    notrandom = random;
                    this.bonbonDispo.push(this.bonbonservice.Bonbons[random]);
                    i++;
                  }
                }
              }

}