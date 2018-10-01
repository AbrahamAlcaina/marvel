import { TestBed } from '@angular/core/testing';

import { MarvelApiService } from './marvelApi.service';

describe('MarvelAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarvelApiService = TestBed.get(MarvelApiService);
    expect(service).toBeTruthy();
  });
});
