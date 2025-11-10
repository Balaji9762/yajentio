import { Component,type OnInit, type OnDestroy } from '@angular/core';
import  { Router } from "@angular/router"
import { Subscription } from "rxjs"
import { AuthService } from '../auth.service';
interface MenuItem {
  name: string;
  url: string;
  sub: SubMenuItem[];
}

interface SubMenuItem {
  icon?: string;
  name: string;
  url: string;
  sub?: SubMenuItem[];
}
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  phoneNumber = "+91-7418602650"
  socialLinks = {
    facebook: "https://www.facebook.com/people/Yst-Acdemy/pfbid05ni9sHpr9zZYYXksJjPh8hvLSejht9eAWxQZzbkJBcBBC4rqyoVPqC2qrKFPVBUol/",
    linkedin: "https://www.linkedin.com/in/yajentio-training-academy-584225385/?trk=public-profile-join-page",
    youtube: "https://www.youtube.com/@Yajentio-Training-Academy",
    instagram: "https://www.instagram.com/yajentiotrainingacademy/",
    whatsapp: "https://bit.ly/482CBaq",
    twitter: " https://x.com/Yajentio_Train",
  }

  // Authentication properties
  isLoggedIn = false
  userEmail = ""
  currentUser: any = null
  private authSubscription: Subscription = new Subscription()

  navs: MenuItem[] = [
    {
      name: "Home",
      url: "/home",
      sub: [],
    },
    {
      name: "About Us",
      url: "/about-us",
      sub: [],
    },
    {
      name: "Courses",
      url: "/courses",
      sub: [],
    },
    {
      name: "Events",
      url: "/events",
      sub: [],
    },
    {
      name: "Services",
      url: "/services",
      sub: [
        {
          name: "Branches",
          url: "/services/branches",icon: '/assets/images/services/seo/OIP.webp'
        },
        {
          name: "Digital Marketing",
          url: "/services/digitalmarketing",icon: '/assets/images/services/seo/Digital-Marketing-Transparent-Free-PNG.png'
        },
        {
          name: "Seo",
          url: "/services/seo",icon: '/assets/images/services/seo/seob-2.png'
        },
        {
          name: "Pay per Click",
          url: "/services/payperclick",icon: '/assets/images/services/seo/pay-per-click-1.png'
        },
        {
          name: "Content Writing",
          url: "/services/content-writing",icon: '/assets/images/services/seo/sheet.png'
        },
        {
          name: "Web Development",
          url: "/services/web-development",icon: '/assets/images/services/seo/world-wide-web.png'
        },
        {
          name: "Influencer Marketing",
          url: "/services/influence-marketing",icon: '/assets/images/services/seo/influencer-1.png'
        },
         {
          name: "Photography And Video",
          url: "/services/photography-and-video",icon: '/assets/images/services/seo/wedding-photography.png'
        },
        {
          name: "Social Media Marketing",
          url: "/services/social-media-marketing",icon: '/assets/images/services/seo/marketing-2.png'
        },

      ],
    },
    {
      name: "Jobs",
      url: "/jobs",
      sub: [],
    },
    {
      name: "Contact",
      url: "/contact",
      sub: [],
    },
  ]

ngOnInit(): void {

}
}
