import { TestBed } from '@angular/core/testing';

import { SplashThreeSectionService } from './splash-three-section.service';

describe('SplashThreeSectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SplashThreeSectionService = TestBed.get(SplashThreeSectionService);
    expect(service).toBeTruthy();
  });
});
