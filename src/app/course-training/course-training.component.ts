import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../courses/api.service';
@Component({
  selector: 'app-course-training',
  standalone: false,
  templateUrl: './course-training.component.html',
  styleUrl: './course-training.component.scss'
})
export class CourseTrainingComponent  implements OnInit {
  courseDetails: any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (courseId) {
      this.apiService.getCourses().subscribe((courses) => {
        this.courseDetails = courses.find((course: { id: string; }) => course.id == courseId);
      });
    }
  }
}
