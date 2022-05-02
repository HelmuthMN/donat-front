import { TestBed } from '@angular/core/testing';

import { BoletoService } from './boleto.service';

describe('BoletoService', () => {
  let service: BoletoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoletoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
