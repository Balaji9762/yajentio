import { TestBed } from '@angular/core/testing';

import { YtaEventsService } from './yta-events.service';

describe('YtaEventsService', () => {
  let service: YtaEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YtaEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
