import { TestBed } from '@angular/core/testing';

import { VlcService } from './vlc.service';

describe('VlcService', () => {
  let service: VlcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VlcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
