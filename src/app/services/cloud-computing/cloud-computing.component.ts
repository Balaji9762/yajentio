import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cloud-computing',
  standalone: false,
  templateUrl: './cloud-computing.component.html',
  styleUrl: './cloud-computing.component.scss'
})
export class CloudComputingComponent {
  contactForm: FormGroup;
  captchaCode: string = '34669';

  // Carousel data
  carouselImages = [
    {
      url: '/placeholder.svg?height=1080&width=1920',
      title: 'BREATHE CLOUD CLOUD SERVICES AS CONVENIENT AS BREATHING',
      subtitle: 'Experience seamless cloud solutions'
    },
    {
      url: '/placeholder.svg?height=1080&width=1920',
      title: 'SCALABLE INFRASTRUCTURE FOR YOUR BUSINESS',
      subtitle: 'Grow without limits with our cloud platform'
    },
    {
      url: '/placeholder.svg?height=1080&width=1920',
      title: 'SECURE & RELIABLE CLOUD HOSTING',
      subtitle: 'Your data is safe with enterprise-grade security'
    },
    {
      url: '/placeholder.svg?height=1080&width=1920',
      title: 'AI-POWERED CLOUD ANALYTICS',
      subtitle: 'Make data-driven decisions with intelligent insights'
    },
    {
      url: '/placeholder.svg?height=1080&width=1920',
      title: 'GLOBAL CLOUD NETWORK',
      subtitle: 'Worldwide coverage for optimal performance'
    },
    {
      url: '/placeholder.svg?height=1080&width=1920',
      title: 'AUTOMATED CLOUD DEPLOYMENT',
      subtitle: 'Deploy applications with one-click simplicity'
    },
    {
      url: '/placeholder.svg?height=1080&width=1920',
      title: 'ENTERPRISE CLOUD SOLUTIONS',
      subtitle: 'Tailored solutions for large-scale operations'
    }
  ];

  currentSlide: number = 0;
  autoSlideInterval: any;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      query: ['', [Validators.required, Validators.minLength(10)]],
      captcha: ['', [Validators.required]]
    });

    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  // Carousel methods
  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.stopAutoSlide();
    setTimeout(() => this.startAutoSlide(), 3000); // Restart auto-slide after 3 seconds
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.carouselImages.length;
  }

  prevSlide(): void {
    this.currentSlide = this.currentSlide === 0 ? this.carouselImages.length - 1 : this.currentSlide - 1;
  }

  getCurrentImage() {
    return this.carouselImages[this.currentSlide];
  }

  // Existing form methods
  refreshCaptcha(): void {
    this.captchaCode = Math.floor(10000 + Math.random() * 90000).toString();
    this.contactForm.patchValue({ captcha: '' });
  }

  isCaptchaValid(): boolean {
    return this.contactForm.get('captcha')?.value === this.captchaCode;
  }

  scrollToForm(): void {
    const formElement = document.querySelector('.form-section');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  }

  onSubmit(): void {
    if (this.contactForm.valid && this.isCaptchaValid()) {
      console.log('Form Data:', this.contactForm.value);
      alert('Thank you! Your message has been sent successfully.');
      this.resetForm();
    } else {
      if (!this.isCaptchaValid()) {
        alert('Please enter the correct captcha code.');
      } else {
        alert('Please fill in all required fields correctly.');
      }
      this.markFormGroupTouched();
    }
  }

  private resetForm(): void {
    this.contactForm.reset();
    this.refreshCaptcha();
  }

  private markFormGroupTouched(): void {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['email']) return 'Please enter a valid email';
      if (field.errors['minlength']) return `${fieldName} is too short`;
      if (field.errors['pattern']) return 'Please enter a valid mobile number';
    }
    return '';
  }
}
