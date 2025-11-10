import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
export interface JobApplication {
  name: string;
  phone: string;
  email: string;
  gender: string;
  qualification: string;
  currentRole: string;
  currentCTC: string;
  softskills: string;
  position: string;
  experience: string;
  trainings: string;
  additionalDetails?: string;
  resume?: File;
  marketingConsent: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = `${environment.baseUrl}/Applyforjob`;  // Replace with your API endpoint
  getCourses: any;

  constructor(private http: HttpClient) { }
  submitApplicationForm(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, {
      headers: {
        // Don't set Content-Type for FormData - let browser set it with boundary
      },
      reportProgress: true,
      observe: 'response'
    });
  }

  // Alternative method for JSON submission (without file)
  submitApplicationFormJson(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  // Try nested structure that might match server expectations
  submitApplicationFormNested(data: any): Observable<any> {
    const nestedData = {
      job: data
    };
    return this.http.post(this.apiUrl, nestedData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
