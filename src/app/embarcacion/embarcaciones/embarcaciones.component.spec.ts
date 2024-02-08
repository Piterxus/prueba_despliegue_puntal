import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbarcacionesComponent } from './embarcaciones.component';

describe('EmbarcacionesComponent', () => {
  let component: EmbarcacionesComponent;
  let fixture: ComponentFixture<EmbarcacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmbarcacionesComponent]
    });
    fixture = TestBed.createComponent(EmbarcacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
