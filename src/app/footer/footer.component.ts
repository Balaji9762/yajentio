import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface FooterData {
  company: {
    name: string;
    address: string;
    email: string;
    phone: string;
  };
  links: {
    ourpolicies: string[];
    quicklinks: string[];
    trendingcourses:string[];
  };
  social: {
    facebook: string;
    linkedin: string;
    instagram: string;
    twitter: string;
    youtube: string;
    telegram: string;
    whatsapp: string;
  };
  copyright: string;
}
@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  footerData: FooterData | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<FooterData>('assets/footer-data.json').subscribe(data => {
      this.footerData = data;
    });
  }
}
