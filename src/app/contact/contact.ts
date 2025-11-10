export interface Contact {
  name: string;
  mobileNo: string;
  email: string;
  category: string;
  course: string;
  otherCourses?: string;
  trainingType: string;
  preferredCity: string;
  message?: string;
  acceptTerms: boolean;
  recaptchaToken?: string | null; // Add this line
}
