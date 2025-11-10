import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  courses = [
    {
      name: 'UI/WEB DESIGN',
      imageUrl: 'assets/ui-design.jpg', // Replace with your actual image path
      duration: '45 hours',
      fee: '10,000',
      rating: 5,
      responses: '2654+'
    },
    {
      name: 'ANGULAR',
      imageUrl: 'assets/angular.jpg', // Replace with your actual image path
      duration: '45 hours',
      fee: '15,000',
      rating: 5,
      responses: '2654+'
    },
    {
      name: 'REACT JS',
      imageUrl: 'assets/react.jpg', // Replace with your actual image path
      duration: '45 hours',
      fee: '15,000',
      rating: 5,
      responses: '2654+'
    }
  ];
}
