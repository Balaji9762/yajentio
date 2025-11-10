import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: false,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  stats = [
    { value: '00+', label: 'Completed Projects', icon: 'fas fa-check-circle' }, // Replace icons as needed
    { value: '00%', label: 'Happy Clients', icon: 'fas fa-smile-beam' },
    { value: '00+', label: 'Ongoing Projects', icon: 'fas fa-spinner' },
    { value: '00+', label: 'Winning Awards', icon: 'fas fa-trophy' }
  ];

  contactTitle = 'Have any question about us?';
  contactSubtitle = 'Don\'t hesitate to contact us.';
  contactButtonText = 'Contact Us';
   contactButtonLink = '/contact'; // Replace with the actual contact link

}
