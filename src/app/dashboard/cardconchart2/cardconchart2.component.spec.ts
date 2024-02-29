import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardconchart2Component } from './cardconchart2.component';

describe('Cardconchart2Component', () => {
  let component: Cardconchart2Component;
  let fixture: ComponentFixture<Cardconchart2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cardconchart2Component]
    });
    fixture = TestBed.createComponent(Cardconchart2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
