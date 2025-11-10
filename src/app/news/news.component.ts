import { Component, OnInit } from '@angular/core';
import { NewsService, News } from './news.service';

@Component({
  selector: 'app-news',
  standalone: false,

  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit {
  newsList: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getAllNews().subscribe((data: News[]) => {
      // Remove duplicates (based on n_id or n_name + n_time)
      this.newsList = this.removeDuplicates(data);
    });
  }

  removeDuplicates(news: News[]): News[] {
    const unique = new Map();
    news.forEach(item => {
      const key = `${item.n_name}-${item.n_time}`;
      if (!unique.has(key)) {
        unique.set(key, item);
      }
    });
    return Array.from(unique.values());
  }
}
