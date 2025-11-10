import { Component } from '@angular/core';

@Component({
  selector: 'app-web-development',
  standalone: false,
  templateUrl: './web-development.component.html',
  styleUrl: './web-development.component.scss'
})
export class WebDevelopmentComponent {
seoSteps = [
    {
      iconUrl: 'assets/images/services/seo/w2.png',
      title: 'Planning and Design',
      description: 'We start by understanding your business goals, identifying your target audience, and structuring your content strategically. From there, our team designs a clean, user-friendly layout that delivers a smooth and engaging browsing experience.'
    },
    {
      iconUrl: 'assets/images/services/seo/w3.png',
      title: 'Development',
      description: 'Next, we turn the design into a fully functional website using clean, optimized. Our developers ensure it’s responsive, lightning-fast, and flawlessly compatible across all devices and modern browsers.'
    },
    {
      iconUrl: 'assets/images/services/seo/w4.png',
      title: 'Testing and Launch',
      description: 'Before launch, we conduct thorough testing to ensure flawless functionality, speed, and user experience. Once everything is polished, we go live — and continue to monitor performance for ongoing improvements and optimization.'
    }
  ];
  // Array of benefit objects
  benefits = [
    {
      iconUrl: 'assets/images/services/seo/v1.png',
      title: 'Strong First Impressions',
      description: 'A well-crafted website instantly builds trust and credibility, leaving a strong, lasting impression on every visitor.'
    },
    {
      iconUrl: 'assets/images/services/seo/v2.png',
      title: 'Responsive Across All Devices',
      description: 'Mobile-responsive design delivers seamless, consistent experiences on all devices — enhancing user engagement and expanding your reach'
    },
    {
      iconUrl: 'assets/images/services/seo/v3.png',
      title: 'Custom Features & Flexibility',
      description: 'Enjoy custom-built functionality designed around your business goals — delivering unique interactions and a more engaging user experience.'
    },
    {
      iconUrl: 'assets/images/services/seo/v4.png',
      title: 'SEO-Optimized Structure',
      description: 'SEO-friendly site architecture boosts your visibility in search engines, helping you rank higher and drive more organic traffic to your website.'
    },
    {
      iconUrl: 'assets/images/services/seo/v5.png',
      title: 'Consistent Brand Identity',
      description: 'Strengthen your brand identity with consistent design, color schemes, and messaging that authentically represent your voice and values.'
    },
    {
      iconUrl: 'assets/images/services/seo/v6.png',
      title: 'Data-Driven Insights',
      description: 'Built-in analytics deliver key insights into user behavior, helping you make smarter decisions and continuously improve your website’s performance.'
    }
  ];
  // Array of SEO tool logos
  seoTools = [
    {
      name: 'Screaming Frog',
      logoUrl: 'assets/images/services/seo/15385-7819.webp'
    },
    {
      name: 'WordStream',
      logoUrl: 'assets/images/services/seo/Word-Stream.webp'
    },
    {
      name: 'Moz',
      logoUrl: 'assets/images/services/seo/Moz_logo.svg.webp'
    },
    {
      name: 'Google Trends',
      logoUrl: 'assets/images/services/seo/Google-Trends.webp'
    },
    {
      name: 'Ahrefs',
      logoUrl: 'assets/images/services/seo/id4XvvhUCP.webp'
    },
    {
      name: 'Semrush',
      logoUrl: 'assets/images/services/seo/SEMrush-1.webp'
    },
    {
      name: 'Google Analytics',
      logoUrl: 'assets/images/services/seo/Google-Analytics-1.webp'
    },
    {
      name: 'RankMath',
      logoUrl: 'assets/images/services/seo/rank-math7263.logowik.com_.webp'
    }
  ];

  // --- Data for SERVICES section ---
  services = [
    {
      iconUrl: 'assets/images/services/seo/pay-per-click-1.webp',
      title: 'Pay Per Click',
      description: 'Attract ready-to-convert customers and boost your ROI with smart, data-backed PPC campaigns crafted specifically around your business objectives.'
    },
    {
      iconUrl: 'assets/images/services/seo/website-icon.webp',
      title: 'Website Development',
      description: 'We build visually compelling, user-centric websites that not only look great but also provide seamless navigation and drive engagement.'
    },
    {
      iconUrl: 'assets/images/services/seo/seo-content-writing.webp',
      title: 'SEO',
      description: 'Strengthen your online presence and earn audience trust through our results-focused SEO strategies and high-quality, keyword-optimized content that drives organic traffic.'
    },
    {
      iconUrl: 'assets/images/services/seo/social-media-1.webp',
      title: 'Social Media Marketing',
      description: 'Elevate your brand visibility and build meaningful connections with tailored, creative social media strategies designed for each platform.'
    },
    {
      iconUrl: 'assets/images/services/seo/seo-content-writing.webp',
      title: 'Content Writing',
      description: 'Tell your story with clear, compelling content that captures attention and drives action — crafted to connect, engage, and convert across every platform.'
    }
  ];

  // --- Data and Logic for FAQ'S section ---
  openFaqIndex: number | null = null;

  faqs = [
    {
      question: 'What is SEO and why is it important for my business?',
      answer: 'SEO (Search Engine Optimization) is crucial for increasing your online visibility. It helps potential customers find your business when they search for products or services like yours on Google, leading to more traffic, leads, and sales.'
    },
    {
      question: 'Do you offer local SEO services?',
      answer: 'Yes, we specialize in local SEO services designed to help businesses attract customers in their geographical area. This includes optimizing your Google Business Profile, local keyword targeting, and building local citations.'
    },
    {
      question: 'How long does it take to see results from SEO?',
      answer: 'SEO is a long-term strategy. While some improvements can be seen in a few weeks, significant results, such as ranking for competitive keywords, typically take 4-6 months of consistent effort.'
    },
    {
      question: 'Why can Search Engine Marketing (SEM) be costly?',
      answer: 'SEM (like PPC ads) can be costly because you are paying for each click. Costs depend on the competitiveness of your keywords, the quality of your ads, and your campaign management. However, it provides immediate visibility and can be very profitable when managed correctly.'
    },
    {
      question: 'What\'s the difference between On-Page and Off-Page SEO?',
      answer: 'On-Page SEO refers to optimizations you do on your own website, like optimizing titles, content, and site speed. Off-Page SEO refers to actions taken outside your website to improve its authority, such as link building and social media promotion.'
    },
    {
      question: 'Can SEO help generate leads for my business?',
      answer: 'Absolutely. By attracting high-quality, organic traffic from users actively searching for your solutions, SEO is one of the most effective ways to generate qualified leads for your business.'
    },
    {
      question: 'How do you measure SEO success?',
      answer: 'We measure SEO success using a variety of key performance indicators (KPIs), including organic traffic, keyword rankings, click-through rate (CTR), conversion rate, and overall return on investment (ROI).'
    }
  ];

  /**
   * Toggles an FAQ item open or closed.
   */
  toggleFaq(index: number): void {
    if (this.openFaqIndex === index) {
      this.openFaqIndex = null;
    } else {
      this.openFaqIndex = index;
    }
  }
}
