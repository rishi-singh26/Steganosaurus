import { TestBed } from '@angular/core/testing';

import { StegnoService } from './stegno.service';

describe('StegnoService', () => {
  let service: StegnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StegnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
