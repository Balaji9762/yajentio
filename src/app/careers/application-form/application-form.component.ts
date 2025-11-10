import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-application-form',
  standalone: false,
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.scss'
})
export class ApplicationFormComponent implements OnInit {
  applicationForm: FormGroup;
  selectedFile: File | null = null;
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';
  formData: { [key: string]: any } = {}; // Dynamic JSON object

   jsonData: string = ''; // Variable to store JSON output

  qualifications = [
    'High School',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'PhD',
    'Other'
  ];

  experienceYears = [
    '0-1 years',
    '1-3 years',
    '3-5 years',
    '5-8 years',
    '8+ years'
  ];

  positions = [
    'Software Developer',
    'UI/UX Designer',
    'Project Manager',
    'Business Analyst',
    'Quality Analyst'
  ];

  constructor(
    private fb: FormBuilder,
    private ApiService: ApiService
  ) {
    this.applicationForm = this.fb.group({
      enter_your_name: ['', [Validators.required]],
      enter_phone_number: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      enter_your_email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      select_qualification: ['', Validators.required],
      enter_your_current_job_role: ['', Validators.required],
      enter_your_current_ctc: ['', Validators.required],
      enter_your_soft_skills: ['', Validators.required],
      position_applying: ['', Validators.required],
      years_of_experience: ['', Validators.required],
      enter_your_training_and_certifications: ['', Validators.required],
      additionl_details: [''],
      // marketingConsent: [false]
    });
  }

  ngOnInit(): void {}

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (allowedTypes.includes(file.type)) {
        this.selectedFile = file;
      } else {
        alert('Please upload a PDF or Word document');
        event.target.value = '';
      }
    }
  }

  onButtonClick(): void {
    console.log('Button clicked!');
    console.log('Form touched:', this.applicationForm.touched);
    console.log('Form dirty:', this.applicationForm.dirty);
    console.log('Form valid:', this.applicationForm.valid);
    
    // Check individual field validity
    Object.keys(this.applicationForm.controls).forEach(key => {
      const control = this.applicationForm.get(key);
      if (control && control.invalid) {
        console.log(`Field ${key} is invalid:`, control.errors);
      }
    });
  }

  async onSubmit(): Promise<void> {
    console.log('Submit button clicked!');
    console.log('Form valid:', this.applicationForm.valid);
    console.log('Form errors:', this.applicationForm.errors);
    console.log('Form value:', this.applicationForm.value);
    
    if (this.applicationForm.valid) {
      this.isSubmitting = true;
      this.submitError = '';

      try {
        // Try JSON submission first (without file)
        const formData = { ...this.applicationForm.value };
        
        // Remove empty values and convert types to match server expectations
        Object.keys(formData).forEach(key => {
          if (formData[key] === null || formData[key] === undefined || formData[key] === '') {
            delete formData[key];
          }
        });

        // Convert years_of_experience to integer if it exists
        if (formData.years_of_experience) {
          // Extract number from string like "3-5 years" -> 3
          const yearsMatch = formData.years_of_experience.match(/(\d+)/);
          if (yearsMatch) {
            formData.years_of_experience = parseInt(yearsMatch[1]);
          } else {
            formData.years_of_experience = 0;
          }
        }

        console.log('Form data being sent as JSON:', formData);

        // Server expects FormData with 'job' (JSON string) and 'resume' (file)
        const formPayload = new FormData();
        formPayload.append('job', JSON.stringify(formData));
        
        // Add resume file if selected
        if (this.selectedFile) {
          formPayload.append('resume', this.selectedFile);
        } else {
          // Create empty file if no resume selected (server expects resume parameter)
          const emptyFile = new File([''], 'empty.txt', { type: 'text/plain' });
          formPayload.append('resume', emptyFile);
        }
        
        console.log('Form data being sent as FormData:', formData);
        console.log('Job JSON string:', JSON.stringify(formData));
        
        await this.ApiService.submitApplicationForm(formPayload).toPromise();
        this.submitSuccess = true;
        this.applicationForm.reset();
        this.selectedFile = null;
      } catch (error: any) {
        console.error('Submission error:', error);
        
        // Provide more specific error messages
        if (error.status === 500) {
          this.submitError = 'Server error occurred. Please check your data and try again.';
        } else if (error.status === 400) {
          this.submitError = 'Invalid data provided. Please check all fields and try again.';
        } else if (error.status === 0) {
          this.submitError = 'Network error. Please check your connection and try again.';
        } else {
          this.submitError = `Failed to submit application. Error: ${error.status} ${error.statusText}`;
        }
      } finally {
        this.isSubmitting = false;
      }
    } else {
      this.markFormGroupTouched(this.applicationForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
