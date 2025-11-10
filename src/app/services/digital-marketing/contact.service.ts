import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { environment } from '../../../environments/environment'

export interface ContactEnquiry {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export interface ContactResponse {
  id: number
  name: string
  email: string
  phone: string
  service: string
  message: string
}
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = `${environment.baseUrl}/savecontact`

  constructor(private http: HttpClient) {}

  submitContactEnquiry(enquiry: ContactEnquiry): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(this.apiUrl, enquiry)
  }
}
