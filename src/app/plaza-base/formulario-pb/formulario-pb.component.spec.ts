import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPbComponent } from './formulario-pb.component';

describe('FormularioPbComponent', () => {
  let component: FormularioPbComponent;
  let fixture: ComponentFixture<FormularioPbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioPbComponent]
    });
    fixture = TestBed.createComponent(FormularioPbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
