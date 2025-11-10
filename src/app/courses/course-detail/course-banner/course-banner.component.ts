import { Component } from '@angular/core';

@Component({
  selector: 'app-course-banner',
  standalone: false,
  templateUrl: './course-banner.component.html',
  styleUrl: './course-banner.component.scss'
})
export class CourseBannerComponent {
  course = {
    title: 'Fullstack Java & .NET',
    rating: '4.9/5',
    reviews: '6,000+ student reviews',
    enrolled: '10,000+ Enrolled',
    experience: '10+ Years Experience',
    placement: '90% Placement Success',
    duration: '4 Months',
    price: '₹ 16,000'
  };
}
