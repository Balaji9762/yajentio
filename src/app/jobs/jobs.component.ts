import { Component, OnInit } from '@angular/core';
import { JobsService } from './jobs.service';
@Component({
  selector: 'app-jobs',
  standalone: false,
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent implements OnInit {
  jobs: any[] = [];

  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    this.fetchJobs();
  }

  fetchJobs(): void {
    this.jobsService.getJobs().subscribe((data) => {
      this.jobs = data;
    });
  }
}
