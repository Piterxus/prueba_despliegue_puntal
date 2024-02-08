import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTripulanteComponent } from './tabla-tripulante.component';

describe('TablaTripulanteComponent', () => {
  let component: TablaTripulanteComponent;
  let fixture: ComponentFixture<TablaTripulanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaTripulanteComponent]
    });
    fixture = TestBed.createComponent(TablaTripulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
