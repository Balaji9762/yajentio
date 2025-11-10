import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  standalone: false,
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
    @Input() course: any;
    getdetails(event:any){
      console.log("course name ",event);
    }

}
