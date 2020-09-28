import { TestBed } from '@angular/core/testing';

import { CodingStatsService } from './coding-stats.service';

describe('CodingStatsService', () => {
  let service: CodingStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodingStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
