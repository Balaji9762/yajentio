import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface News {
  n_id: number;
  n_name: string;
  n_image_url: string;
  n_time: string;
  n_link: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = '/getAllnews';
  private addNewsUrl = '/addNews'; // Endpoint for adding news

  constructor(private http: HttpClient) {}

  getAllNews(): Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }

  addNews(news: any): Observable<any> {
    // Map form fields to News interface properties
    const newsData: News = {
      n_id: 0, // This will likely be assigned by the backend
      n_name: news.name,
      n_image_url: news.image,
      n_time: news.time,
      n_link: news.link
    };

    return this.http.post<any>(this.addNewsUrl, newsData);
  }
}
