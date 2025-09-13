import { Component } from '@angular/core';
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
  `,
  styleUrls: ['./app.css']
})
export class App { 
  isLoginPage = false;

  constructor(private router: Router) {
    // Listen to route changes
    router.events.subscribe(() => {
      this.isLoginPage = router.url === '/login';
    });
  }
}
