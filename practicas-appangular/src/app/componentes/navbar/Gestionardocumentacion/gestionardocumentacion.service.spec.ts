import { TestBed } from '@angular/core/testing';

import { GestionardocumentacionService } from './gestionardocumentacion.service';

describe('GestionardocumentacionService', () => {
  let service: GestionardocumentacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionardocumentacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
