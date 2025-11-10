import { Component } from '@angular/core';

@Component({
  selector: 'app-careers',
  standalone: false,
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent {
  cards = [
    { title: 'Career', description: 'Apply For Job', image: '../assets/careers/apply.png', link: '/apply-job' },
    { title: 'Training', description: 'Apply For Training', image: '../assets/careers/Trainings.png', link: '/apply-training' },
    { title: 'Training with Internship', description: 'Apply For Training with Internship', image: '../assets/careers/Internship.png', link: '/apply-internship' }
  ];
}
