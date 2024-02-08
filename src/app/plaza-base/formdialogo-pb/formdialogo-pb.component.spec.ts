import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdialogoPbComponent } from './formdialogo-pb.component';

describe('FormdialogoPbComponent', () => {
  let component: FormdialogoPbComponent;
  let fixture: ComponentFixture<FormdialogoPbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormdialogoPbComponent]
    });
    fixture = TestBed.createComponent(FormdialogoPbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
