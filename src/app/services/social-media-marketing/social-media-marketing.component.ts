import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media-marketing',
  standalone: false,
  templateUrl: './social-media-marketing.component.html',
  styleUrl: './social-media-marketing.component.scss'
})
export class SocialMediaMarketingComponent {
seoSteps = [
    {
      iconUrl: '/assets/images/services/seo/sd 2.png',
      title: 'Strategy Development',
      description: 'As a top social media agency, we align with your goals, define your audience, choose the right platforms, and deliver consistent, engaging content through a strategic calendar.'
    },
    {
      iconUrl: '/assets/images/services/seo/sd 3.png',
      title: 'Content Creation',
      description: 'At Yajentio Training Academy, we create platform-specific content that blends creativity with your brand voice — driving real engagement and lasting impact.'
    },
    {
      iconUrl: '/assets/images/services/seo/sd 4.png',
      title: 'Engagement & Community Building',
      description: 'At Yajentio Training Academy, we spark conversations — managing your socials in real-time to build trust, boost engagement, and grow a loyal community.'
    }
  ];
  // Array of benefit objects
  benefits = [
    {
      iconUrl: '/assets/images/services/seo/s1.png',
      title: 'Audience Engagement',
      description: 'Create meaningful relationships by connecting with your audience in real time — starting conversations, inspiring engagement, and turning followers into loyal brand advocates.'
    },
    {
      iconUrl: '/assets/images/services/seo/s2.png',
      title: 'Enhanced Brand Awareness',
      description: 'Harness the full potential of social media to expand your brand’s presence, reach new audiences, and build lasting visibility across platforms.'
    },
    {
      iconUrl: '/assets/images/services/seo/s3.png',
      title: 'Precision Targeted Advertising',
      description: 'Boost your ROI with smart targeting that places your ads in front of the right audience, at the perfect moment, on the most effective platforms.'
    },
    {
      iconUrl: '/assets/images/services/seo/s4.png',
      title: 'Effective Lead Generation',
      description: 'Transform audience interaction into real results with captivating content and well-placed calls-to-action that guide high-quality leads to your website.'
    },
    {
      iconUrl: '/assets/images/services/seo/s5.png',
      title: 'Diverse Content Formats',
      description: 'Keep your audience hooked with diverse, platform-optimized content — from images and videos to reels, stories, and beyond — all crafted to match user behavior and preferences.'
    },
    {
      iconUrl: '/assets/images/services/seo/s6.png',
      title: 'Real-Time Customer Feedback',
      description: 'Gain real-time feedback, reviews, and insights that give you a clearer understanding of your customers — helping you refine your strategy and enhance your offerings.'
    }
  ];
  // Array of SEO tool logos
  seoTools = [
    {
      name: 'Screaming Frog',
      logoUrl: '/assets/images/services/seo/f1.png'
    },
    {
      name: 'WordStream',
      logoUrl: '/assets/images/services/seo/f2.png'
    },
    {
      name: 'Moz',
      logoUrl: '/assets/images/services/seo/f3.webp'
    },
    {
      name: 'Google Trends',
      logoUrl: '/assets/images/services/seo/f4.webp'
    },
    // {
    //   name: 'Ahrefs',
    //   logoUrl: '/assets/images/services/seo/id4XvvhUCP.webp'
    // },
    // {
    //   name: 'Semrush',
    //   logoUrl: '/assets/images/services/seo/SEMrush-1.webp'
    // },
    // {
    //   name: 'Google Analytics',
    //   logoUrl: '/assets/images/services/seo/Google-Analytics-1.webp'
    // },
    // {
    //   name: 'RankMath',
    //   logoUrl: '/assets/images/services/seo/rank-math7263.logowik.com_.webp'
    // }
  ];

  // --- Data for SERVICES section ---
  services = [
    {
      iconUrl: '/assets/images/services/seo/pay-per-click-1.webp',
      title: 'Pay Per Click',
      description: 'Attract ready-to-convert customers and boost your ROI with smart, data-backed PPC campaigns crafted specifically around your business objectives.'
    },
    {
      iconUrl: '/assets/images/services/seo/website-icon.webp',
      title: 'Website Development',
      description: 'We build visually compelling, user-centric websites that not only look great but also provide seamless navigation and drive engagement.'
    },
    {
      iconUrl: '/assets/images/services/seo/seo-content-writing.webp',
      title: 'SEO',
      description: 'Strengthen your online presence and earn audience trust through our results-focused SEO strategies and high-quality, keyword-optimized content that drives organic traffic.'
    },
    {
      iconUrl: '/assets/images/services/seo/social-media-1.webp',
      title: 'Social Media Marketing',
      description: 'Elevate your brand visibility and build meaningful connections with tailored, creative social media strategies designed for each platform.'
    },
    {
      iconUrl: '/assets/images/services/seo/seo-content-writing.webp',
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
