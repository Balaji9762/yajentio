import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  standalone: false,
  templateUrl: './chat-box.component.html',
  styleUrl: './chat-box.component.scss'
})
export class ChatBoxComponent {
  isChatOpen = false;
  newMessage = '';
  messages: { sender: string; text: string }[] = [];

  toggleChat() {
    this.isChatOpen = !this.isChatOpen;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({ sender: 'Me', text: this.newMessage });

      const userQuestion = this.newMessage.toLowerCase();
      this.newMessage = '';

      setTimeout(() => this.autoReply(userQuestion), 1000); // Simulated bot response delay
    }
  }

  autoReply(userQuestion: string) {
    let reply = "Sorry, I didn't understand that. Can you ask in a different way?";

    // Dynamic bot responses for software courses
    if (userQuestion.includes('hello') || userQuestion.includes('hi')) {
      reply = 'Hello! How can I assist you today?';
    } else if (userQuestion.includes('courses')) {
      reply = 'We offer courses on Angular, React, Node.js, Python, and Java. Which one are you interested in?';
    } else if (userQuestion.includes('price') || userQuestion.includes('cost')) {
      reply = 'Our course prices vary. Please visit our pricing page or provide the course name for details.';
    } else if (userQuestion.includes('contact')) {
      reply = 'You can contact us at support@example.com or call +1234567890.';
    } else if (userQuestion.includes('duration')) {
      reply = 'Each course duration is between 4 to 12 weeks, depending on the complexity.';
    } else if (userQuestion.includes('certificate')) {
      reply = 'Yes! We provide a certificate upon course completion.';
    } else if (userQuestion.includes('beginner')) {
      reply = 'Yes, we have beginner-friendly courses for Angular, React, and Python.';
    } else if (userQuestion.includes('advanced')) {
      reply = 'Our advanced courses include Full-Stack Development, Machine Learning, and Cloud Computing.';
    } else if (userQuestion.includes('placement') || userQuestion.includes('job assistance')) {
      reply = 'We offer job placement assistance and resume-building sessions after course completion.';
    } else if (userQuestion.includes('enroll')) {
      reply = 'You can enroll by visiting our website and selecting your desired course.';
    } else if (userQuestion.includes('thanks') || userQuestion.includes('thank you')) {
      reply = 'You’re welcome! Let me know if you need anything else.';
    }

    this.messages.push({ sender: 'Bot', text: reply });
  }

}
