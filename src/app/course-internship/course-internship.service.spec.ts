import { TestBed } from '@angular/core/testing';

import { CourseInternshipService } from './course-internship.service';

describe('CourseInternshipService', () => {
  let service: CourseInternshipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseInternshipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
