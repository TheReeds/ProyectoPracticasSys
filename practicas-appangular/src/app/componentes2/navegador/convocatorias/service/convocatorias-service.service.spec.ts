import { TestBed } from '@angular/core/testing';

import { ConvocatoriasServiceService } from './convocatorias-service.service';

describe('ConvocatoriasServiceService', () => {
  let service: ConvocatoriasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvocatoriasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
