import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInternshipComponent } from './course-internship.component';

describe('CourseInternshipComponent', () => {
  let component: CourseInternshipComponent;
  let fixture: ComponentFixture<CourseInternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseInternshipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
