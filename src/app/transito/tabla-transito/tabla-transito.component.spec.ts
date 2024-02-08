import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTransitoComponent } from './tabla-transito.component';

describe('TablaTransitoComponent', () => {
  let component: TablaTransitoComponent;
  let fixture: ComponentFixture<TablaTransitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaTransitoComponent]
    });
    fixture = TestBed.createComponent(TablaTransitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
