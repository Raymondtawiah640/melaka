import { Component } from '@angular/core';
import { Router, RouterModule, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Loading } from '../loading/loading';
import { filter } from 'rxjs/operators';

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
  private minLoaderTime = 3000; // minimum loader time in ms
  private loaderStartTime: number = Date.now();

  constructor(private router: Router) {
    // Show loader on first load
    setTimeout(() => this.loading = false, 5000);

    // Listen to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart || 
                      event instanceof NavigationEnd || 
                      event instanceof NavigationCancel || 
                      event instanceof NavigationError)
    ).subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;           // show loader
        this.loaderStartTime = Date.now(); // record start
      } else {
        // Calculate elapsed time and ensure minimum loader duration
        const elapsed = Date.now() - this.loaderStartTime;
        const remaining = this.minLoaderTime - elapsed;

        setTimeout(() => this.loading = false, remaining > 0 ? remaining : 0);
      }
    });
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
      this.router.navigate(['/about']).then(() => setTimeout(() => this.scrollToElement(sectionId), 100));
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

  openPopup() {
    this.popupOpen = true;
    this.closeMenu();
  }

  closePopup() {
    this.popupOpen = false;
  }
}
