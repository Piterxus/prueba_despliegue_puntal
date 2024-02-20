import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoPbComponent } from './contenido-pb.component';


describe('ContenidoPbComponent', () => {
  let component: ContenidoPbComponent;
  let fixture: ComponentFixture<ContenidoPbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoPbComponent]
    });
    fixture = TestBed.createComponent(ContenidoPbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
