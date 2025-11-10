import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  title = 'Technology simplifier';
  subtitle = 'How we are Founded';
  description = `Our Experts With Hands-On The Most Complex Technology Intends To Provide
  The Most Simpler Solutions Which Analyze The Better Performance For Our
  Customers.`;
  historyText = `It has survived not only five centuries, but also the leap into electronic
  typesetting, remaining essentially unchanged.`;
  businessText = `Every month they moved their money the old way which wasted their time
  and money. So they invented a beautifully simple workaround that became a
  billion-dollar business.`;
  imageUrl = 'assets/images/aboutus/technology simplifer.png';
  services = [
    {
      title: 'SEO Ranking',
      description: `Our Experts Deal In SEARCH ENGINE OPTIMIZATION (SEO), Which Helps You
      Rank Your Website On Top Of Google Via All The Best Strategies & Tools.`,
      icon: 'assets/images/aboutus/messenger.png' // e.g., assets/images/seo-icon.png
    },
    {
      title: 'Responsive Web',
      description: `Responsiveness Help The Site To Adjust According To The Device ,Our Experts
      Develop The Most Responsive Site Which Indeed Looks Good And Is Easy To Operate`,
      icon: 'assets/images/aboutus/responsive web.png'
    },
    {
      title: 'Marketing Growth',
      description: `Our Expert Team Implants Best Marketing Strategies That Help Your Business Grow
      Vigorously`,
      icon: 'assets/images/aboutus/marketing web.png'
    },
    {
      title: 'User Interface',
      description: `Our Development Team Build Most User Friendly Designs For Our Customers Which
      Help Them Rank On Top Quickly`,
      icon: 'assets/images/aboutus/user interface.jpg'
    },
    {
      title: 'Secure Web',
      description: `Along With Development Process Our Team Also Provides Best Security Service
      For All The Web Portals To Maintain Best Customer Privacy.`,
      icon: 'assets/images/aboutus/sign.jpg'
    },
    {
      title: 'Expert Team',
      description: `We Have Expert Team With Hands-On Experience In Different Fields, Who Intend
      To Provide The Best Service To Customers.`,
      icon: 'assets/images/aboutus/settings.png'
    }
  ];
  mainTitle = "Our Services";
  mainDescription = "Our Experts Have Hands On Experience With Providing Best Development Services And Provide Best Analysis For Quick Response For Our Customers."
  titles = 'Providing on-the-go customer support with our mobile apps';
  appleStoreLink = '#'; // Replace with your Apple App Store link
  googlePlayLink = '#'; // Replace with your Google Play Store link
  appleStoreImage = 'assets/images/aboutus/applestore.png'; // Path to your Apple Store image
  googlePlayImage = 'assets/images/aboutus/playstore.png'; // Path to your Google Play image
  phoneImage = 'assets/images/aboutus/Converted_smg.png'; // Replace with the actual path to your phone image

}
