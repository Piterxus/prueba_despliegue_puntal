import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConfirmacionTransitoComponent } from './card-confirmacion-transito.component';

describe('CardConfirmacionTransitoComponent', () => {
  let component: CardConfirmacionTransitoComponent;
  let fixture: ComponentFixture<CardConfirmacionTransitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardConfirmacionTransitoComponent]
    });
    fixture = TestBed.createComponent(CardConfirmacionTransitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
