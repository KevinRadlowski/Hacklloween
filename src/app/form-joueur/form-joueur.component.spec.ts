import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJoueurComponent } from './form-joueur.component';

describe('FormJoueurComponent', () => {
  let component: FormJoueurComponent;
  let fixture: ComponentFixture<FormJoueurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormJoueurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormJoueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
