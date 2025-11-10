import { Component,  NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    // Your components here
  ],
  imports: [
    MatIconModule, // Import Material Icon Module
    // Other modules
  ],
})
export class AppModule { }
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  heroData = {
    title: 'Simple IT Solutions Company For Complex Connections',
    subtitle: 'We simplify the most complex technological problems with ease and provide unique IT solutions for better performance of our clients.',
    buttons: {
      getStarted: {
        text: 'Get Started',
        link: 'https://www.youtube.com/@Yajentio-Training-Academy'
      },
      watchVideo: {
        text: 'Watch Video',
        link: 'https://www.youtube.com/@Yajentio-Training-Academy'
      }
    }
  };
  services = [
    {
      icon: 'bi-gear',
      title: 'Web Development',
      description: 'Our experts have hands with experience on developing website both static and dynamic based upon the requirement of client to deliver your well-crafted content.',
      color: '#0057D9'
    },
    {
      icon: 'bi-shield-check',
      title: 'UI & UX Design',
      description: 'Our Graphic team develops the most unique & creative web designs which help the clients to get the appropriate response quick for their business.',
      color: '#7B1FA2'
    },
    {
      icon: 'bi-stopwatch',
      title: 'Mobile App Development',
      description: 'Mobile being the key asset of today\'s world, our experts deal with developing both IOS & ANDROID mobile apps which help to develop better approach for clients business.',
      color: '#FBC02D'
    },
    {
      icon: 'bi-megaphone',
      title: 'Digital Marketing',
      description: 'Make the most of our expertise and experience to develop a successful digital marketing campaign. Realtors can persuade users to buy their products or services.',
      color: '#D32F2F'
    },
    {
      icon: 'bi-lock',
      title: 'Software Testing',
      description: 'Software testing is an effective way to identify and correct problems. Our software testing team is best to appeal to both the tech-savvy and the earthy if an mistakes happens.',
      color: '#388E3C'
    },
    {
      icon: 'bi-droplet',
      title: 'IVR Calling',
      description: 'IVR, VoIP, CloudTalk services are the most convenient way to communicate with your customers and potential customers. You can send messages or call anytime, anywhere.',
      color: '#E64A19'
    }
  ];
  // Removed @oninput() decorator and declared as regular properties
  title!: string;
  description!: string;
  points!: string[];
  image!: string;
  reverse: boolean = false;
}
