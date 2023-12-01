import { TestBed } from '@angular/core/testing';

import { ServicioempresaService } from './servicioempresa.service';

describe('ServicioempresaService', () => {
  let service: ServicioempresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioempresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
