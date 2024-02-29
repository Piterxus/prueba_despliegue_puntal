import { TestBed } from '@angular/core/testing';

import { ApiTripulantesService } from './api-tripulantes.service';

describe('ApiTripulantesService', () => {
  let service: ApiTripulantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTripulantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
