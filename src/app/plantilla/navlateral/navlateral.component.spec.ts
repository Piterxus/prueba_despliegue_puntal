import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavlateralComponent } from './navlateral.component';

describe('NavlateralComponent', () => {
  let component: NavlateralComponent;
  let fixture: ComponentFixture<NavlateralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavlateralComponent]
    });
    fixture = TestBed.createComponent(NavlateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
