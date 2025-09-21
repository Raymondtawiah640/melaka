import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, CommonModule],
  template: `
    <!-- Show navbar only if NOT on login page -->
    <app-navbar *ngIf="!isLoginPage"></app-navbar>

    <!-- Page content -->
    <router-outlet></router-outlet>

    <!-- Show footer only if NOT on login page -->
    <app-footer *ngIf="!isLoginPage"></app-footer>

    <!-- Floating WhatsApp button, hide on login page -->
    <a *ngIf="!isLoginPage"
      href="https://wa.me/233546965098" 
      target="_blank"
      class="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50"
      title="Chat on WhatsApp">
      <i class="fab fa-whatsapp fa-lg"></i>
    </a>

    <!-- PWA Install Notification -->
    <div *ngIf="showInstall" 
         class="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slide-up">
      Install Melaka App
      <button (click)="installApp()" class="ml-4 bg-white text-purple-700 px-3 py-1 rounded">Install</button>
    </div>
  `,
  styleUrls: ['./app.css']
})
export class App implements OnInit { 
  isLoginPage = false;
  deferredPrompt: any;
  showInstall = false;

  constructor(private router: Router) {
    router.events.subscribe(() => {
      this.isLoginPage = router.url === '/login';
    });
  }

  ngOnInit() {
    // Listen for PWA install prompt
    window.addEventListener('beforeinstallprompt', (e: any) => {
      e.preventDefault();
      this.deferredPrompt = e;

      // Show notification after 3 seconds
      setTimeout(() => {
        this.showInstall = true;
      }, 3000);
    });

    // Optional: hide notification after 15 seconds if user doesn't click
    setTimeout(() => this.showInstall = false, 18000);
  }

  installApp() {
    if (!this.deferredPrompt) return;
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice.then((choiceResult: any) => {
      console.log('User choice:', choiceResult.outcome);
      this.showInstall = false;
      this.deferredPrompt = null;
    });
  }
}
