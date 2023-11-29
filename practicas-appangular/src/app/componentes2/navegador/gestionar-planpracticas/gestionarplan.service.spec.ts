import { TestBed } from '@angular/core/testing';

import { GestionarplanService } from './gestionarplan.service';

describe('GestionarplanService', () => {
  let service: GestionarplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionarplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
