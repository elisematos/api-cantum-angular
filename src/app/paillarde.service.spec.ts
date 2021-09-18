import { TestBed } from '@angular/core/testing';

import { PaillardeService } from './paillarde.service';

describe('PaillardeService', () => {
  let service: PaillardeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaillardeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
