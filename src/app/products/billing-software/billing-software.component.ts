import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-billing-software',
  standalone: false,
  templateUrl: './billing-software.component.html',
  styleUrl: './billing-software.component.scss'
})
export class BillingSoftwareComponent {
  deliveredCustomers: number = 500; // You can update this dynamically
  features = [
    { name: 'Admin Web Panel', class: 'admin-web-panel' },
    { name: 'Customer Web Panel', class: 'customer-web-panel' },
    { name: 'Easy Cancellation', class: 'easy-cancellation' },
    { name: 'Ready to Host', class: 'ready-to-host' },
    { name: 'Adding Products', class: 'adding-products' },
    { name: 'Unlimited Categories', class: 'unlimited-categories' }
  ];
  learnMoreLink: string = '/home';  // Replace with your actual link
  subscribeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.subscribeForm = this.fb.group({
      email: ['supportit@yajentio.com', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.subscribeForm.valid) {
      console.log('Form submitted:', this.subscribeForm.value);
      // Add your subscription logic here
    }
  }
  clients = [
    { name: 'AP R&R', logo: 'assets/logos/ap-rr.png' },
    { name: 'R&R Polavaram', logo: 'assets/logos/rr-polavaram.png' },
    { name: 'APSAC', logo: 'assets/logos/apsac.png' },
    { name: 'A.P.S.R.T.C', logo: 'assets/logos/apsrtc.png' },
    { name: 'Aroma Care', logo: 'assets/logos/aroma-care.png' },
    { name: 'Keerthi', logo: 'assets/logos/keerthi.png' },
    { name: 'ETB', logo: 'assets/logos/etb.png' },
    { name: 'Maridi', logo: 'assets/logos/maridi.png' },
    { name: 'MCV Moto Corp', logo: 'assets/logos/mcv-moto-corp.png' }
  ];
}
