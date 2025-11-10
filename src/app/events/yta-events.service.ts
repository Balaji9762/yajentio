import { Injectable } from '@angular/core';
import  { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { type Observable, throwError } from "rxjs"
import { catchError, map } from "rxjs/operators"
import { YtaEvent, ApiResponse } from './yta-event';
@Injectable({
  providedIn: 'root'
})
export class YtaEventsService {

 private apiUrl = "http://3.108.126.170:8080/YTAgetAll"

  constructor(private http: HttpClient) {}

  getEvents(): Observable<YtaEvent[]> {
    return this.http.get<YtaEvent[]>(this.apiUrl).pipe(
      map((response) => response || []),
      catchError(this.handleError),
    )
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error("API Error:", error)
    return throwError(() => new Error("Failed to fetch events. Please try again later."))
  }
}
