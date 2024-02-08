import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPbComponent } from './tabla-pb.component';

describe('TablaPbComponent', () => {
  let component: TablaPbComponent;
  let fixture: ComponentFixture<TablaPbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaPbComponent]
    });
    fixture = TestBed.createComponent(TablaPbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
