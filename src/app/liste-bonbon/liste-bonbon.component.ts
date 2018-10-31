import { Component, OnInit } from '@angular/core';
import { BonbonService } from '../service/bonbon.service'
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-liste-bonbon',
  templateUrl: './liste-bonbon.component.html',
  styleUrls: ['./liste-bonbon.component.css']
})
export class ListeBonbonComponent implements OnInit {
bonbonDispo= [];

closeResult: string;

  constructor(private bonbonservice: BonbonService, private modalService: NgbModal) { }
  remove(name){
    this.bonbonDispo = this.bonbonDispo.filter(function(elem){
      return elem.nom != name;
    })
  }




  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }



  ngOnInit() {
    let notrandom:number;
    let random:number;
    let i= 0;
    while ( i < 3 ){
      random = Math.floor(Math.random() * Math.floor(10));
      if( random != notrandom){
        notrandom = random;
        this.bonbonDispo.push(this.bonbonservice.Bonbons[random]);
        i++;
      }
    }
  }

}
