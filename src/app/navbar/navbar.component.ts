import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PanierComponent } from '../panier/panier.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(PanierComponent);
    modalRef.componentInstance.name = 'World';
  }
  ngOnInit() {
  }

}
