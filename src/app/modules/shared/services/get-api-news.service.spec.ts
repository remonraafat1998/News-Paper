import { TestBed } from '@angular/core/testing';

import { GetApiNewsService } from './get-api-news.service';

describe('GetApiNewsService', () => {
  let service: GetApiNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetApiNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
