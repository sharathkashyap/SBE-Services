import { TestBed } from '@angular/core/testing';

import { SbeServiceLibService } from './sbe-service-lib.service';

describe('SbeServiceLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SbeServiceLibService = TestBed.get(SbeServiceLibService);
    expect(service).toBeTruthy();
  });
});
