
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, tap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface EnquiryFormData {
  name: string;
  phone_no: string;
  email: string;
  category: string;
  course: string;
  other_courses?: string;
  training_type: string;
  preferred_city: string;
  message?: string;
  acceptTerms: boolean;
  recaptchaToken?: string | null;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
  errors?: any;
}

export interface ContactResponse {
  id: number;
  name: string;
  email: string;
  phone_no: string;
  category: string;
  course: string;
  other_courses: string;
  training_type: string;
  preferred_city: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = `${environment.baseUrl}/savecontact`;

  constructor(private http: HttpClient) { }

  submitEnquiry(formData: EnquiryFormData): Observable<ApiResponse> {
    // Remove acceptTerms and recaptchaToken from the data sent to the server
    const { acceptTerms, recaptchaToken, ...dataToSend } = formData;

    console.log('Sending data to API:', dataToSend);
    console.log('API URL:', this.apiUrl);

    return this.http.post<any>(this.apiUrl, dataToSend)
      .pipe(
        retry(1), // Retry once if the request fails
        tap(response => console.log('Raw API Response:', response)),
        map(response => {
          // If the response contains an id, it's likely successful
          if (response && response.id) {
            return {
              success: true,
              message: 'Enquiry submitted successfully',
              data: response
            } as ApiResponse;
          } else if (response && response.success === false) {
            // If the API explicitly returns success: false
            return response as ApiResponse;
          } else {
            // Default success response
            return {
              success: true,
              message: 'Enquiry submitted successfully',
              data: response
            } as ApiResponse;
          }
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;

      // If the server returns validation errors
      if (error.status === 422 && error.error?.errors) {
        return throwError(() => ({
          success: false,
          message: 'Validation failed',
          errors: error.error.errors
        }));
      }
    }

    console.error(errorMessage);
    return throwError(() => ({
      success: false,
      message: 'Something went wrong. Please try again later.'
    }));
  }

}
