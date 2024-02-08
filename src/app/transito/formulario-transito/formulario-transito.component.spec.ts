import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioTransitoComponent } from './formulario-transito.component';

describe('FormularioTransitoComponent', () => {
  let component: FormularioTransitoComponent;
  let fixture: ComponentFixture<FormularioTransitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioTransitoComponent]
    });
    fixture = TestBed.createComponent(FormularioTransitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
