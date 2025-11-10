
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService, EnquiryFormData } from './contact.service';
import { finalize } from 'rxjs/operators';
import { RecaptchaDirective } from './recaptcha.directive';



@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl:'./contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  @ViewChild(RecaptchaDirective, { static: false }) recaptcha!: RecaptchaDirective;
  enquiryForm!: FormGroup;
  categories = ['frontend', 'backend', 'fullstack', 'Web Development', 'Mobile Development', 'Data Science', 'Cloud Computing', 'Cybersecurity'];
  cities = ['hyberbad', 'Chennai', 'Hyderabad', 'Bangalore', 'Delhi', 'New York', 'London', 'Tokyo', 'Sydney', 'Berlin', 'Mumbai', 'Singapore'];
  training_types = ['offline', 'online', 'Any', 'In-Person', 'Hybrid'];

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';
  validationErrors: { [key: string]: string } = {};

  recaptchaToken: string | null = null;
  recaptchaSiteKey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'; // Replace with your actual site key

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.enquiryForm = this.fb.group({
      // Contact Details
      name: ['', [Validators.required]],
      phone_no: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],

      // Course Details
      category: ['', [Validators.required]],
      course: ['', [Validators.required]],
      other_courses: [''],

      // More Details
      training_type: ['Any', [Validators.required]],
      preferred_city: ['', [Validators.required]],

      // Message
      message: ['', [Validators.maxLength(300)]],

      // Terms
      acceptTerms: [false, [Validators.requiredTrue]]
    });
  }

  onCaptchaResolved(token: string): void {
    this.recaptchaToken = token;
  }

  onCaptchaExpired(): void {
    this.recaptchaToken = null;
  }

  onSubmit(): void {
    console.log('Form submitted, validity:', this.enquiryForm.valid);
    console.log('Form values:', this.enquiryForm.value);

    if (this.enquiryForm.valid) {
      // For testing purposes, we'll make the recaptcha optional
      // Remove this condition in production
      /*
      if (!this.recaptchaToken) {
        this.handleErrorResponse('Please complete the reCAPTCHA verification');
        return;
      }
      */
      this.submitForm();
    } else {
      this.markFormGroupTouched(this.enquiryForm);
      console.log('Form errors:', this.getFormValidationErrors());
    }
  }

  // Helper method to log all validation errors
  getFormValidationErrors() {
    const errors: any = {};
    Object.keys(this.enquiryForm.controls).forEach(key => {
      const control = this.enquiryForm.get(key);
      if (control?.errors) {
        errors[key] = control.errors;
      }
    });
    return errors;
  }

  submitForm(): void {
    this.resetSubmissionState();
    this.isSubmitting = true;

    const formData: EnquiryFormData = {
      ...this.enquiryForm.value,
      recaptchaToken: this.recaptchaToken
    };

    console.log('Submitting form data:', formData);

    this.contactService.submitEnquiry(formData)
      .pipe(
        finalize(() => this.isSubmitting = false)
      )
      .subscribe({
        next: (response) => {
          console.log('Response received:', response);
          if (response.success) {
            this.handleSuccessResponse();
          } else {
            this.handleErrorResponse(response.message);
          }
        },
        error: (error) => {
          console.error('Error submitting form:', error);
          if (error.errors) {
            this.handleValidationErrors(error.errors);
          } else {
            this.handleErrorResponse(error.message || 'An unexpected error occurred');
          }
        }
      });
  }

  resetSubmissionState(): void {
    this.isSubmitting = false;
    this.submitSuccess = false;
    this.submitError = false;
    this.errorMessage = '';
    this.validationErrors = {};
  }

  handleSuccessResponse(): void {
    this.submitSuccess = true;

    // First reset the form completely to clear all values
    this.enquiryForm.reset();

    // Then reinitialize the form with default values
    this.initForm();

    // Reset reCAPTCHA
    if (this.recaptcha) {
      this.recaptcha.resetCaptcha();
      this.recaptchaToken = null;
    }

    // Auto-dismiss success message after 5 seconds
    setTimeout(() => {
      this.submitSuccess = false;
    }, 5000);
  }

  handleErrorResponse(message: string): void {
    this.submitError = true;
    this.errorMessage = message;
  }

  handleValidationErrors(errors: any): void {
    this.submitError = true;
    this.errorMessage = 'Please correct the errors in the form.';
    this.validationErrors = errors;

    // Mark fields with errors as touched
    Object.keys(errors).forEach(field => {
      const control = this.enquiryForm.get(field);
      if (control) {
        control.markAsTouched();
        control.setErrors({ serverError: errors[field] });
      }
    });
  }

  markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if ((control as FormGroup).controls) {
        this.markFormGroupTouched(control as FormGroup);
      }
    });
  }

  onClose(): void {
    // Reset form completely
    this.enquiryForm.reset();
    this.resetSubmissionState();

    // Reinitialize the form with default values
    this.initForm();

    // Reset reCAPTCHA if available
    if (this.recaptcha) {
      this.recaptcha.resetCaptcha();
      this.recaptchaToken = null;
    }
  }

  onSkip(): void {
    // Skip logic
    console.log('Form skipped');
  }

  // Helper method to check if a field has validation errors
  hasError(controlName: string): boolean {
    const control = this.enquiryForm.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  // Helper method to get error message for a field
  getErrorMessage(controlName: string): string {
    const control = this.enquiryForm.get(controlName);

    if (!control) return '';

    if (control.hasError('required')) {
      return 'This field is required';
    }

    if (control.hasError('email')) {
      return 'Please enter a valid email address';
    }

    if (control.hasError('maxlength')) {
      return `Maximum ${control.errors?.['maxlength'].requiredLength} characters allowed`;
    }

    if (control.hasError('serverError')) {
      return control.errors?.['serverError'];
    }

    return 'Invalid input';
  }
}



