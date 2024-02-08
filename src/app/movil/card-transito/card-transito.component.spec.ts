import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTransitoComponent } from './card-transito.component';

describe('CardTransitoComponent', () => {
  let component: CardTransitoComponent;
  let fixture: ComponentFixture<CardTransitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTransitoComponent]
    });
    fixture = TestBed.createComponent(CardTransitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
