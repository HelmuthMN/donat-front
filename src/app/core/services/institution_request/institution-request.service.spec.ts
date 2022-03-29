import { TestBed } from '@angular/core/testing';

import { InstitutionRequestService } from './institution-request.service';

describe('InstitutionRequestService', () => {
  let service: InstitutionRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstitutionRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
