import { TestBed } from '@angular/core/testing';

import { SiteEmailService } from './site-email.service';

describe('SiteEmailService', () => {
  let service: SiteEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
