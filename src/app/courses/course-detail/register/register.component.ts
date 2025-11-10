import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;
  benefits: string[] = [
    'One-Click Apply – Register easily.',
    'Learn from Industry Experts.',
    'Hands-On Projects & Real-world Scenarios.',
    'Regular Mock Interviews & Interview Guidance.',
    'Dedicated Support Team.',
    'Placement Assistance.',
  ];

  constructor(private fb: FormBuilder, private registerService: RegisterService) {
    this.registerForm = this.fb.group({
      full_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country_code: ['+91', Validators.required],
      whatsapp_number: ['', [Validators.required, Validators.pattern('^[0-9]{10,12}$')]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.registerService.registerUser(this.registerForm.value).subscribe({
        next: (res) => alert('Registration Successful!'),
        error: (err) => alert('Registration Failed!'),
      });
    }
  }
  features = [
    { feature: 'Live Interactive Sessions', value: 'yes' },
    { feature: 'Industry Expert Trainers', value: 'yes' },
    { feature: 'Real-World Projects', value: 'yes' },
    { feature: 'Placement Assistance', value: 'placement' },
    { feature: 'Hands-on Labs & Assignments', value: 'yes' },
    { feature: '1-on-1 Doubt Clearing', value: 'yes' },
    { feature: 'Resume & Interview Preparation', value: 'yes' },
    { feature: 'Lifetime Course Materials', value: 'yes' },
    { feature: 'Final Verdict', value: 'final' },
  ];


  faqs = [
    { question: 'What is the duration of the course?', answer: 'The duration of the course varies depending on the program, typically ranging from 3 to 6 months.' },
    { question: 'Do you provide placement assistance?', answer: 'Yes, we offer 100% placement support, including resume building and interview preparation.' },
    { question: 'Can I access the course materials after completion?', answer: 'Yes, you will have lifetime access to the course materials and resources.' },
    { question: 'What if I miss a live session?', answer: 'All live sessions are recorded and available for you to watch later at your convenience.' },
  ];
}
