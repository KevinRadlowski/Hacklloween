import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMaisonComponent } from './form-maison.component';

describe('FormMaisonComponent', () => {
  let component: FormMaisonComponent;
  let fixture: ComponentFixture<FormMaisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormMaisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
