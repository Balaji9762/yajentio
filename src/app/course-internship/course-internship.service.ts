import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CourseInternshipService {


  private apiUrl = `${environment.baseUrl}/coursetopic`; // Update with your actual API URL

  constructor(private http: HttpClient) {}

  // Fetch all courses (GET)
  getCourses(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Add a new course (POST)
  addCourse(courseData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, courseData);
  }
}
