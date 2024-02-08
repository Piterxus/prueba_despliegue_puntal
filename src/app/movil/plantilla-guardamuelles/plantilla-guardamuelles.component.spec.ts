import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaGuardamuellesComponent } from './plantilla-guardamuelles.component';

describe('PlantillaGuardamuellesComponent', () => {
  let component: PlantillaGuardamuellesComponent;
  let fixture: ComponentFixture<PlantillaGuardamuellesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantillaGuardamuellesComponent]
    });
    fixture = TestBed.createComponent(PlantillaGuardamuellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
