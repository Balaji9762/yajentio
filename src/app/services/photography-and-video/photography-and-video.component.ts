import { Component } from '@angular/core';

@Component({
  selector: 'app-photography-and-video',
  standalone: false,
  templateUrl: './photography-and-video.component.html',
  styleUrl: './photography-and-video.component.scss'
})
export class PhotographyAndVideoComponent {
seoSteps = [
    {
      iconUrl: 'assets/images/services/seo/p2.png',
      title: 'Visuals That Tell Your Story',
      description: 'We capture the soul of your brand with photography and video content designed to resonate emotionally and connect instantly with your audience.'
    },
    {
      iconUrl: 'assets/images/services/seo/p3.png',
      title: 'High-Quality Production, Every Frame',
      description: 'From pre-production to final edits, our creative team ensures every shot is sharp, professional, and aligned with your brand’s personality and goals.'
    },
    {
      iconUrl: 'assets/images/services/seo/p4.png',
      title: 'Content That Converts, Not Just Impresses',
      description: 'Our visuals are more than beautiful — they’re built to drive action. Whether for social media, websites, or ads, we deliver content that turns views into results.'
    }
  ];
  // Array of benefit objects
  benefits = [
    {
      iconUrl: 'assets/images/services/seo/c1.png',
      title: 'Timeless Wedding Stories',
      description: 'We capture every emotion, detail, and celebration with cinematic precision — preserving your big day through breathtaking photos and heartfelt videos.'
    },
    {
      iconUrl: 'assets/images/services/seo/c2.png',
      title: 'Cinematic Production',
      description: 'From brand films to promotional videos, our production team delivers high-quality visuals that reflect your story, style, and strategy with impact.'
    },
    {
      iconUrl: 'assets/images/services/seo/c3.png',
      title: 'Candid Moments',
      description: 'Our lens catches real emotions and unscripted smiles — turning everyday moments into timeless memories with an artistic, documentary-style approach.'
    },
    {
      iconUrl: 'assets/images/services/seo/c4.png',
      title: 'Professional Shoots',
      description: ' Whether it’s a corporate shoot, fashion portfolio, or social media reel, we bring creative direction and technical expertise to every frame.'
    },
    {
      iconUrl: 'assets/images/services/seo/c5.png',
      title: 'Stunning Visuals',
      description: 'Your brand deserves to be seen in its best light. We create polished visual content that builds recognition, trust, and engagement across platforms.'
    },
    {
      iconUrl: 'assets/images/services/seo/c6.png',
      title: 'From Concept to Creation',
      description: 'We don’t just shoot — we plan, direct, capture, and edit. Our end-to-end service ensures a smooth process and outstanding results, every time.'
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
