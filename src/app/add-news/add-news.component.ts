import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { NewsService, News } from '../news/news.service';
@Component({
  selector: 'app-add-news',
  standalone: false,

  templateUrl: './add-news.component.html',
  styleUrl: './add-news.component.scss'
})
export class AddNEWSComponent {
  newsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private newsService: NewsService
  ) {
    this.newsForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      image: ['', Validators.required],
      time: ['', Validators.required],
      link: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.newsForm.valid) {
      const formData = this.newsForm.value;
      this.newsService.addNews(formData).subscribe({
        next: (response) => {
          console.log('News added successfully', response);
          this.newsForm.reset();
        },
        error: (error) => {
          console.error('Error adding news', error);
        }
      });
    } else {
      this.markFormGroupTouched(this.newsForm);
    }
  }

  // Helper method to trigger validation on all form fields
  markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if ((control as FormGroup).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }
}
