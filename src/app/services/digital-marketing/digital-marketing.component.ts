import { Component, Output, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ContactService } from './contact.service';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-digital-marketing',
  standalone: false,
  templateUrl: './digital-marketing.component.html',
  styleUrl: './digital-marketing.component.scss'
})
export class DigitalMarketingComponent {
// You can add any component logic here if needed
onViewServices() {
    this.router.navigate(['/services']);
  }

  onContactUs() {
    this.router.navigate(['/contact']);
  }

   @Output() closeModal = new EventEmitter<void>()

  contactForm: FormGroup
  isLoading = false
  successMessage = ""
  errorMessage = ""

  serviceOptions = [
    "Select Service",
    "SEO",
    "Pay Per Click",
    "Content Writing",
    "Web Development",
    "Influence Marketing",
    "Photography and Video",
    "Social Media Marketing",
  ]

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router,
  ) {
    this.contactForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern(/^\d{10,}$/)]],
      service: ["", Validators.required],
      message: ["", [Validators.required, Validators.minLength(10)]],
    })
  }

  onSubmit(): void {
    if (this.contactForm.valid && this.contactForm.get("service")?.value !== "Select Service") {
      this.isLoading = true
      this.errorMessage = ""
      this.successMessage = ""

      const formData = this.contactForm.value
      this.contactService.submitContactEnquiry(formData).subscribe({
        next: (response) => {
          this.isLoading = false
          this.successMessage = "Thank you! Your enquiry has been submitted successfully."
          this.contactForm.reset()
          setTimeout(() => {
            this.closeModal.emit()
          }, 2000)
        },
        error: (error) => {
          this.isLoading = false
          this.errorMessage = "Failed to submit enquiry. Please try again."
          console.error("Error submitting form:", error)
        },
      })
    } else {
      this.errorMessage = "Please fill in all fields correctly."
    }
  }

  onClose(): void {
    this.hideModal()
    this.closeModal.emit()
  }

  get nameError(): string {
    const control = this.contactForm.get("name")
    if (control?.hasError("required")) return "Name is required"
    if (control?.hasError("minlength")) return "Name must be at least 2 characters"
    return ""
  }

  get emailError(): string {
    const control = this.contactForm.get("email")
    if (control?.hasError("required")) return "Email is required"
    if (control?.hasError("email")) return "Please enter a valid email"
    return ""
  }

  get phoneError(): string {
    const control = this.contactForm.get("phone")
    if (control?.hasError("required")) return "Phone is required"
    if (control?.hasError("pattern")) return "Please enter a valid phone number"
    return ""
  }

  get serviceError(): string {
    const control = this.contactForm.get("service")
    if (control?.hasError("required") || control?.value === "Select Service") {
      return "Please select a service"
    }
    return ""
  }

  get messageError(): string {
    const control = this.contactForm.get("message")
    if (control?.hasError("required")) return "Message is required"
    if (control?.hasError("minlength")) return "Message must be at least 10 characters"
    return ""
  }
  showModal = signal(false)

  openModal(): void {
    this.showModal.set(true)
  }

  hideModal(): void {
    this.showModal.set(false)
  }

  // Array of service objects
  services = [
    {
      iconUrl: 'assets/images/services/digital marketing/content.png',
      title: 'Content Writing',
      description: 'Tell your story with clear, compelling content that captures attention and drives action — crafted to connect, engage, and convert across every platform.',
      routePath: '/services/content-writing'
    },
    {
      iconUrl: 'assets/images/services/digital marketing/influencer.png',
      title: 'Influence Marketing',
      description: 'We connect your brand with the right voices — influencer campaigns that boost awareness, drive engagement, and deliver real conversions across Instagram, YouTube, and more.',
      routePath: '/services/influence-marketing'
    },
    {
      iconUrl: 'assets/images/services/digital marketing/pay-per-click.png',
      title: 'Pay Per Click',
      description: 'We create targeted campaigns that drive real conversions — more clicks, quality leads, and higher ROI across Google, Facebook, LinkedIn and beyond.',
      routePath: '/services/pay-per-click'
    },
    {
      iconUrl: 'assets/images/services/digital marketing/app-development.png',
      title: 'Web Development',
      description: 'We design websites that are not just visually stunning but also user-friendly and conversion-focused. From layout to performance, every detail is crafted to reflect your brand and drive results.',
      routePath: '/services/web-development'
    },
    {
      iconUrl: 'assets/images/services/digital marketing/social-media-2.png',
      title: 'Social Media Marketing',
      description: 'We create targeted campaigns that target to right audience and drive real results — more clicks, better leads, and higher ROI across Social Media Channels.',
      routePath: '/services/social-media-marketing'
    },
    {
      iconUrl: 'assets/images/services/digital marketing/seo.png',
      title: 'SEO',
      description: 'We optimize your website to rank higher on search engines, attract the right audience, and drive organic growth — all with smart, effective SEO strategies.',
      routePath: '/services/seo'
    },
    {
      iconUrl: 'assets/images/services/digital marketing/photography.png',
      title: 'Photography and Video',
      description: 'We create high-quality photos and videos that capture your brand’s story, connect with your audience, and elevate your online presence.',
      routePath: '/services/photography-and-video'
    }
  ];

  // Holds the index of the currently open FAQ item. 'null' means all are closed.
  openFaqIndex: number | null = 5; // Defaulting the last one to be open as in the screenshot

  // Array of FAQ objects
  faqs = [
    {
      question: 'What services does Yajentio Training Academy offer?',
      answer: 'Yajentio Training Academy offers a comprehensive suite of digital marketing services including Content Writing, Influence Marketing, Pay Per Click (PPC), Web Development, Social Media Marketing, SEO, and Photography/Video production.'
    },
    {
      question: 'How is Yajentio Training Academy different from other digital marketing agencies?',
      answer: 'Our key difference lies in our holistic approach, combining data-driven strategy with high-impact creativity. We partner with businesses of all sizes, from startups to B2B, to deliver tangible results that drive growth and maximize ROI.'
    },
    {
      question: 'Do you work with businesses in specific industries?',
      answer: 'Yes, we partner with businesses across a wide variety of industries. Our strategies are customized to fit the unique needs and audience of each sector, from B2B to D2C and beyond.'
    },
    {
      question: 'How long does it take to see results?',
      answer: 'The timeline for results can vary based on the services chosen. SEO, for example, is a long-term strategy, while PPC campaigns can generate traffic almost immediately. We set clear expectations and provide regular reporting on performance.'
    },
    {
      question: 'Can I choose only the services I need?',
      answer: 'Absolutely. We offer both comprehensive multi-channel strategies and standalone services. You can choose the specific services that align with your business goals and budget.'
    },
    {
      question: 'Do you provide reporting and performance tracking?',
      answer: 'Yes, transparent reporting and performance tracking are core to our process. We provide regular, easy-to-understand reports that show you exactly how your campaigns are performing against key metrics.'
    }
  ];

  /**
   * Toggles an FAQ item open or closed.
   * If the clicked item is already open, it closes it.
   * If a different item is clicked, it closes the old one and opens the new one.
   * @param index The index of the FAQ item to toggle
   */
  toggleFaq(index: number): void {
    if (this.openFaqIndex === index) {
      // Clicked on the already open item, so close it
      this.openFaqIndex = null;
    } else {
      // Clicked on a new item, so open it
      this.openFaqIndex = index;
    }
  }
}
