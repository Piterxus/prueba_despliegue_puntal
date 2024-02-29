import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardconchart3Component } from './cardconchart3.component';

describe('Cardconchart3Component', () => {
  let component: Cardconchart3Component;
  let fixture: ComponentFixture<Cardconchart3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cardconchart3Component]
    });
    fixture = TestBed.createComponent(Cardconchart3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
