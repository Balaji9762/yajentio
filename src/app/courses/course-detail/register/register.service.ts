import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = `${environment.baseUrl}/saveRegister`; // Use the correct endpoint

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    // Only send the fields the backend expects
    const payload = {
      full_name: userData.full_name,
      email: userData.email,
      country_code: userData.country_code,
      whatsapp_number: userData.whatsapp_number
    };
    return this.http.post(this.apiUrl, payload, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
