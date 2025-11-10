import { Component } from '@angular/core';

@Component({
  selector: 'app-digital-visiting-card',
  standalone: false,
  templateUrl: './digital-visiting-card.component.html',
  styleUrl: './digital-visiting-card.component.scss'
})
export class DigitalVisitingCardComponent {
  plans = [
    {
      name: 'Basic',
      price: 499,
      originalPrice: 999,
      features: [
        'Profile Customization',
        'About (Upto 320 characters)',
        'Unlimited Card Sharing',
        'Admin Dashboard',
        'Responsive Design',
        'One-Click WhatsApp and Email',
        'Help Desk Support',
      ],
    },
    {
      name: 'Premium',
      price: 999,
      originalPrice: 1499,
      bestValue: true,
      features: [
        'Includes All Features in Basic Plans',
        'About (Upto 640 characters)',
        'Product Showcase (Up to 6)',
        'Additional Client Showcase (Up to 6)',
        'Gallery Images (Up to 6)',
        'Extended Product Showcase with Shopping Links',
        'Extended Gallery Images'
      ],
    },
    {
      name: 'Ultimate',
      price: 2999,
      originalPrice: 4999,
      features: [
        'Includes All Features in Premium Plans',
        'About (Creating Unlimited content)',
        'Showcase Up to 20 Products and Manage Ecommerce Store',
        'Multiple Business Profiles (Up to 5)',
        'WhatsApp Channels/Groups',
        'Gallery Images (Up to 20)',
        'Client Showcase (Up to 20)',
        'Add Up To 10 Preferred Customizable Links'
      ],
    }
  ];
  name: string = '';
  number: string = '';

  onSubmit() {
    // Handle form submission here (e.g., send data to a service)
    console.log('Name:', this.name);
    console.log('Number:', this.number);
  }
}
