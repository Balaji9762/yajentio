import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ApiService } from '../courses/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-courses',
  standalone: false,

  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];

  displayedColumns: string[] = ['course_id', 'course_name', 'start_date', 'time', 'description', 'platform', 'course_link'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    // Fetch courses for the cards
    this.apiService.getAllCourses().subscribe((data) => {
      this.courses = data;
      console.log('Courses:', this.courses); // Debugging
    });

    // Fetch courses for the table
    this.apiService.getAllCourses().subscribe((data: any[] | undefined) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  viewCourse(courseName: string | null | undefined): void {
    if (courseName) {
      this.router.navigate(['/course-detail', courseName]);
    } else {
      console.warn('Invalid course name for navigation:', courseName);
    }
  }
}
