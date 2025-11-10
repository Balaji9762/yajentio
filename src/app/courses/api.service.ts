import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private getAllCoursesUrl = `${environment.baseUrl}/getAllcourse`;
  private getByCourseNameUrl = `${environment.baseUrl}/getbycoursename`;
  private apiUrl = `${environment.baseUrl}/coursetopic`;
  private _fetch_data = `${environment.baseUrl}/GetAlltrainingcourses`;
  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<any> {
    return this.http.get<any>(this.getAllCoursesUrl);
  }

  getCourseByName(courseName: string): Observable<any> {
    return this.http.post<any>(this.getByCourseNameUrl, { course_name: courseName });
  }
  getCurriculum(courseName: string): Observable<any[]> {
    return this.http.post<any[]>(this.apiUrl, { course: courseName });
  }
  getCourses(): Observable<any> {
    return this.http.get(this._fetch_data);
  }
  
}
