import { Component } from '@angular/core';


@Component({
  selector: 'app-faq',
  standalone: true,
  templateUrl: './faq.html',
  styleUrls: ['./faq.css'],
  imports: []
})
export class Faq {
  faqs = [
    { 
      question: 'How can I grow my social media followers?', 
      answer: 'We create targeted campaigns and engaging content to help you attract real followers on all major platforms.', 
      open: false 
    },
    { 
      question: 'Do you handle paid social media ads?', 
      answer: 'Yes, we manage your social media ads on platforms like Facebook, Instagram, and TikTok to maximize reach and ROI.', 
      open: false 
    },
    { 
      question: 'Can you improve my brand engagement?', 
      answer: 'Absolutely! We design interactive posts, stories, and campaigns that encourage likes, shares, and comments.', 
      open: false 
    },
    { 
      question: 'Do you provide social media analytics?', 
      answer: 'Yes, we track performance metrics, generate reports, and provide insights to optimize your campaigns.', 
      open: false 
    },
    { 
      question: 'How quickly can I start a campaign?', 
      answer: 'Once you provide your brand details and goals, we can launch a campaign within 3-5 business days.', 
      open: false 
    },
    { 
      question: 'Which social media platforms do you support?', 
      answer: 'We work with Facebook, Instagram, TikTok, LinkedIn, Twitter, and YouTube.', 
      open: false 
    },
    { 
      question: 'Do you create content for my brand?', 
      answer: 'Yes, we provide high-quality images, videos, captions, and posts tailored to your brand’s voice.', 
      open: false 
    },
    { 
      question: 'Can you help with influencer marketing?', 
      answer: 'Yes, we can identify and collaborate with influencers that align with your brand to boost reach and engagement.', 
      open: false 
    },
    { 
      question: 'How much does your service cost?', 
      answer: 'Pricing depends on the services and scale of your campaign. Contact us for a detailed quote.', 
      open: false 
    },
    { 
      question: 'Do you offer campaign strategy consultation?', 
      answer: 'Yes, we provide a complete marketing strategy tailored to your business goals.', 
      open: false 
    },
    { 
      question: 'Can I track campaign performance in real-time?', 
      answer: 'Yes, we provide dashboards and reports so you can monitor progress and results.', 
      open: false 
    },
    { 
      question: 'Do you handle account management?', 
      answer: 'Yes, we manage your social accounts, post regularly, and respond to engagement on your behalf.', 
      open: false 
    }
  ];
}
