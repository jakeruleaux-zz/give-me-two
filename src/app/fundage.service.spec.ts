import { TestBed, inject } from '@angular/core/testing';

import { FundageService } from './fundage.service';

describe('FundageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FundageService]
    });
  });

  it('should ...', inject([FundageService], (service: FundageService) => {
    expect(service).toBeTruthy();
  }));
});
