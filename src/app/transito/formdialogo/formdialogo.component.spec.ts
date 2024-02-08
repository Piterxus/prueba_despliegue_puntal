import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdialogoComponent } from './formdialogo.component';

describe('FormdialogoComponent', () => {
  let component: FormdialogoComponent;
  let fixture: ComponentFixture<FormdialogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormdialogoComponent]
    });
    fixture = TestBed.createComponent(FormdialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
