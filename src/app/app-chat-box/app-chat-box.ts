import { Component, OnInit, OnDestroy } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { AuthService } from '../auth';  // Import the AuthService

interface Message {
  id: number;
  sender_id: number;
  receiver_id: number;
  message: string;
  created_at: string;
}

@Component({
  selector: 'app-app-chat-box',
  standalone: true,
  imports: [HttpClientModule, FormsModule],  // Add CommonModule to handle *ngIf and *ngFor
  templateUrl: './app-chat-box.html',
  styleUrls: ['./app-chat-box.css']
})
export class AppChatBox implements OnInit, OnDestroy {

  messages: Message[] = [];
  newMessage = '';
  loading = false;
  showChat = false;

  private getMessagesUrl = 'http://localhost:8000/api/get-messages.php';
  private sendMessageUrl = 'http://localhost:8000/api/send-message.php';
  private refreshSub: Subscription | undefined;

  private userId!: number;  // Dynamically fetched user ID
  private adminId = 1;      // Admin user ID (static or dynamic based on the system)

  constructor(
    private http: HttpClient,
    private authService: AuthService  // Inject the AuthService
  ) { }

  ngOnInit() {
    // Fetch the user ID dynamically from AuthService
    this.userId = this.authService.getUserId() || 123;  // If no user ID, fallback to 123

    // Auto-refresh messages every 5 seconds
    this.refreshSub = interval(5000).subscribe(() => {
      if (this.showChat) this.loadMessages();
    });
  }

  ngOnDestroy() {
    if (this.refreshSub) this.refreshSub.unsubscribe();
  }

  toggleChat() {
    this.showChat = !this.showChat;
    if (this.showChat) this.loadMessages();
  }

  loadMessages() {
    this.loading = true;
    this.http.get<{ success: boolean, messages: Message[] }>(
      `${this.getMessagesUrl}?user_id=${this.userId}&admin_id=${this.adminId}`
    ).subscribe({
      next: res => {
        if (res.success) {
          this.messages = res.messages;
        }
        this.loading = false;
        setTimeout(() => this.scrollToBottom(), 0);
      },
      error: err => {
        console.error('Failed to load messages', err);
        this.loading = false;
      }
    });
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;

    this.loading = true;

    const payload = {
      sender_id: this.userId,
      receiver_id: this.adminId,
      message: this.newMessage
    };

    this.http.post<{ success: boolean, message: Message }>(
      this.sendMessageUrl,
      payload,
      { headers: { 'Content-Type': 'application/json' } }
    ).subscribe({
      next: res => {
        if (res.success) {
          this.newMessage = '';
          this.loadMessages();
        }
        this.loading = false;
      },
      error: err => {
        console.error('Failed to send message', err);
        this.loading = false;
      }
    });
  }

  private scrollToBottom() {
    const container = document.getElementById('chat-messages');
    if (container) container.scrollTop = container.scrollHeight;
  }
}
