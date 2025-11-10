import { Component } from '@angular/core';

@Component({
  selector: 'app-seo',
  standalone: false,
  templateUrl: './seo.component.html',
  styleUrl: './seo.component.scss'
})
export class SeoComponent {
seoSteps = [
    {
      iconUrl: 'assets/images/services/seo/search-engine.png',
      title: 'Keyword Optimization',
      description: 'At Yajentio Training Academy, we use smart keyword research to understand your audience and optimize your content — boosting visibility and driving the right traffic to your site.'
    },
    {
      iconUrl: 'assets/images/services/seo/auctions.png',
      title: 'On-Page SEO',
      description: 'We fine-tune every element of your website — from meta tags to content structure — to ensure it’s search-engine friendly and delivers a seamless user experience that drives rankings.'
    },
    {
      iconUrl: 'assets/images/services/seo/cta.png',
      title: 'Off-Page SEO',
      description: 'We build high-quality backlinks, boost brand mentions, and strengthen your online authority — helping your site rank higher and earn trust across the web.'
    }
  ];
  // Array of benefit objects
  benefits = [
    {
      iconUrl: 'assets/images/services/seo/high-visibility.png',
      title: 'Increased Organic Traffic',
      description: 'Our expert SEO services in Hyderabad are designed to boost your search rankings and attract steady, high-quality organic traffic — all without the need for paid advertising.'
    },
    {
      iconUrl: 'assets/images/services/seo/advertising.png',
      title: 'Enhanced User Experience',
      description: 'As a user-centric SEO agency in Hyderabad, we optimize your website’s structure, loading speed, and navigation to deliver a seamless experience that keeps visitors engaged and coming back.'
    },
    {
      iconUrl: 'assets/images/services/seo/control.png',
      title: 'Greater Credibility & Trust',
      description: 'Websites that rank high in search results naturally gain more trust. At Yajentio Training Academy, we focus on building your online authority through strategic SEO — boosting both your visibility and brand credibility.'
    },
    {
      iconUrl: 'assets/images/services/seo/result.png',
      title: 'Cost-Effective Growth',
      description: 'Unlike traditional ads, SEO delivers lasting value. At Yajentio Training Academy, our strategic approach boosts your visibility and results — without the need for constant ad spend.'
    },
    {
      iconUrl: 'assets/images/services/seo/advertisements.png',
      title: 'Targeted Traffic Generation',
      description: 'Our SEO services in Hyderabad target high-intent keywords and precise audience segments — attracting the right visitors at the right time, when they’re ready to engage or convert.'
    },
    {
      iconUrl: 'assets/images/services/seo/metrics.png',
      title: 'Sustainable Long-Term Results',
      description: 'SEO isn’t a one-time fix — it’s a long-term strategy that builds momentum. With Yajentio Training Academy’s consistent efforts, your site gains stronger visibility, increased traffic, and lasting results that grow month after month.'
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

