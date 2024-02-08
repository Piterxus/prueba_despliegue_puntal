import { ComponentFixture, TestBed } from '@angular/core/testing';


import { ContenidoTransitoComponent } from './contenido-transito.component';

describe('ContenidoTransitoComponent', () => {
  let component: ContenidoTransitoComponent;
  let fixture: ComponentFixture<ContenidoTransitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenidoTransitoComponent]
    });
    fixture = TestBed.createComponent(ContenidoTransitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
