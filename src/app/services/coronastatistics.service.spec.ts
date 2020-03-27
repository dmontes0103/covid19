import { TestBed } from '@angular/core/testing';

import { CoronastatisticsService } from './coronastatistics.service';

describe('CoronastatisticsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoronastatisticsService = TestBed.get(CoronastatisticsService);
    expect(service).toBeTruthy();
  });
});
