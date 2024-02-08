import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardconchartComponent } from './cardconchart.component';

describe('CardconchartComponent', () => {
  let component: CardconchartComponent;
  let fixture: ComponentFixture<CardconchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardconchartComponent]
    });
    fixture = TestBed.createComponent(CardconchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
