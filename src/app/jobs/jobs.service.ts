import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private apiUrl = environment.baseUrl+'/GetLatestjobs'; //` Replace with actual API URL

  constructor(private http: HttpClient) {}

  getJobs(): Observable<any> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    return this.http.get<any>(this.apiUrl, { headers,
      withCredentials: true  });
  }
}
