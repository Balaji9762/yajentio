import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-course-detail',
  standalone: false,
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent {

  @Input() course: any;
  selectedTab: string = 'description';
  curriculumData: any[] = [];
  http: any;



  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    console.log("curriculum");
  }
  fetchCurriculum() {
    if (this.curriculumData.length === 0 && this.course) {
      this.apiService.getCurriculum(this.course.course_name).subscribe(
        (response) => {
          this.curriculumData = response;
        },
        (error) => {
          console.error('Error fetching curriculum:', error);
        }
      );
    }
  }

  onSelectTab(tab: string) {
    console.log(`Selected Tab: ${tab}`);
    this.selectedTab = tab;
    if (tab === 'curriculum') {
      this.fetchCurriculum();
    }
  }
  ngOnInit(): void {
    // const courseName = this.route.snapshot.paramMap.get('name');
    const courseName = this.route.snapshot.paramMap.get('name');

    if (courseName) {
      this.apiService.getCourseByName(courseName).subscribe((data) => {
        // this.curriculumData = data;
        if (data.length > 0) {
          this.course = data[0];
        }
      });
    }
  }
}
