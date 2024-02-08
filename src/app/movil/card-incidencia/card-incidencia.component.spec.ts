import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIncidenciaComponent } from './card-incidencia.component';

describe('CardIncidenciaComponent', () => {
  let component: CardIncidenciaComponent;
  let fixture: ComponentFixture<CardIncidenciaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardIncidenciaComponent]
    });
    fixture = TestBed.createComponent(CardIncidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
