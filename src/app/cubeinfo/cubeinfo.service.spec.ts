import { TestBed } from '@angular/core/testing';

import { CubeinfoService } from './cubeinfo.service';

describe('CubeinfoService', () => {
  let service: CubeinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CubeinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
