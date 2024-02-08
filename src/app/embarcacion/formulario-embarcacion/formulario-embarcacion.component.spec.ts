import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEmbarcacionComponent } from './formulario-embarcacion.component';

describe('FormularioEmbarcacionComponent', () => {
  let component: FormularioEmbarcacionComponent;
  let fixture: ComponentFixture<FormularioEmbarcacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioEmbarcacionComponent]
    });
    fixture = TestBed.createComponent(FormularioEmbarcacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
