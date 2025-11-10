import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CallbackService {
  private apiUrl = environment.baseUrl+'/saveUserform'; // API URL

  constructor(private http: HttpClient) {}

  requestCallback(formData: any): Observable<any> {
    const payload = {
      uf_name: formData.name,
      uf_phno: formData.phone,
      uf_email_id: formData.email,
      uf_remarks: formData.remarks
    };

    return this.http.post(this.apiUrl, payload);
  }
}
