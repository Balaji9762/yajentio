import { Component, OnInit} from '@angular/core';
import { CourseInternshipService } from './course-internship.service';

@Component({
  selector: 'app-course-internship',
  standalone: false,
  templateUrl: './course-internship.component.html',
  styleUrl: './course-internship.component.scss'


})
export class CourseInternshipComponent implements OnInit {
  courses: any[] = [];
  filteredCourses: any[] = [];
  courseName: string = '';

  constructor(private courseService: CourseInternshipService) {}

  ngOnInit() {
    this.fetchCourses();
  }

  fetchCourses() {
    this.courseService.getCourses().subscribe(
      (data) => {
        this.courses = data;
        this.filteredCourses = data; // Initialize filtered courses
      },
      (error) => {
        console.error("Error fetching courses", error);
      }
    );
  }

  filterCourses() {
    this.filteredCourses = this.courses.filter(course =>
      course.course.toLowerCase().includes(this.courseName.toLowerCase())
    );
  }
}
