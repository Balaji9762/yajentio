import { Component } from '@angular/core';
import { CallbackService } from './callback.service';
@Component({
  selector: 'app-branches',
  standalone: false,
  templateUrl: './branches.component.html',
  styleUrl: './branches.component.scss'
})
export class BranchesComponent {
  title = 'Yajentio Chennai Branch';
  description = `Yajentio Software  opened its new Branch Office in Chennai,
  marking a significant milestone in our journey as a leading provider of
   software solutions and services.`;
  contactButtonText = 'Contact Us';
  contactButtonLink = '/contact'; // Replace with your actual contact link
  imagePath = 'assets/images/services/branches/branches.png'; // Replace with your image path
  formData = {
    name: '',
    phone: '',
    email: '',
    remarks: ''
  };

  nameError: string | null = null;
  phoneError: string | null = null;

  constructor(private callbackService: CallbackService) {}

  validateForm(): boolean {
    this.nameError = this.formData.name.trim() ? null : 'Name is required';
    this.phoneError = this.formData.phone.trim() ? null : 'Phone number is required';
    return !this.nameError && !this.phoneError;
  }

  submitForm() {
    if (!this.validateForm()) {
      return;
    }

    this.callbackService.requestCallback(this.formData).subscribe({
      next: (response) => {
        alert('Request submitted successfully! Reference ID: ' + response.uf_id);
        this.formData = { name: '', phone: '', email: '', remarks: '' };
      },
      error: (error) => {
        console.error('Error submitting request:', error);
        alert('Failed to submit request. Please try again later.');
      }
    });
  }
}
