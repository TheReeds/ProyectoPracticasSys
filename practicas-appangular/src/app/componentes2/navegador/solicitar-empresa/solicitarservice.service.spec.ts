import { TestBed } from '@angular/core/testing';

import { SolicitarserviceService } from './solicitarservice.service';

describe('SolicitarserviceService', () => {
  let service: SolicitarserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitarserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
