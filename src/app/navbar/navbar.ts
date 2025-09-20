import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Loading } from '../loading/loading';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [Loading, RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  loading = true;       // show loader initially
  isMenuOpen = false;
  popupOpen = false;

  constructor(private router: Router) {
    // Simulate loading for 5 seconds
    setTimeout(() => this.loading = false, 5000);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  screenIsSmall(): boolean {
    return window.innerWidth < 768;
  }

  scrollToSection(sectionId: string) {
    this.closeMenu();

    if (this.router.url !== '/about') {
      this.router.navigate(['/about']).then(() => {
        setTimeout(() => this.scrollToElement(sectionId), 100);
      });
    } else {
      this.scrollToElement(sectionId);
    }
  }

  private scrollToElement(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const targetY = element.getBoundingClientRect().top + window.scrollY;
      this.smoothScrollTo(targetY, 1200);
    }
  }

  private smoothScrollTo(targetY: number, duration: number) {
    const startY = window.scrollY;
    const diff = targetY - startY;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      window.scrollTo(0, startY + diff * progress);

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }

  // Popup methods
  openPopup() {
    this.popupOpen = true;
    this.closeMenu();
  }

  closePopup() {
    this.popupOpen = false;
  }
}
