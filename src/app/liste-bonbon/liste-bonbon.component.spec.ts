import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBonbonComponent } from './liste-bonbon.component';

describe('ListeBonbonComponent', () => {
  let component: ListeBonbonComponent;
  let fixture: ComponentFixture<ListeBonbonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeBonbonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBonbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
