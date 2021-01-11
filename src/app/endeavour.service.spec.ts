import { TestBed } from '@angular/core/testing';

import { EndeavourService } from './endeavour.service';

describe('EndeavourService', () => {
  let service: EndeavourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EndeavourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
