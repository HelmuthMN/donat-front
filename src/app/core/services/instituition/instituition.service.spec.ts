import { TestBed } from '@angular/core/testing';

import { InstituitionService } from './instituition.service';

describe('InstituitionService', () => {
  let service: InstituitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstituitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
