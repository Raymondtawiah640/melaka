import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  isMenuOpen = false;

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
  this.closeMenu(); // close menu if open
  const element = document.getElementById(sectionId);
  if (element) {
    const targetY = element.getBoundingClientRect().top + window.scrollY;
    this.smoothScrollTo(targetY, 1200); // 👈 duration in ms (slower = higher)
  }
}

smoothScrollTo(targetY: number, duration: number) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime: number | null = null;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    window.scrollTo(0, startY + diff * progress);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
}

}
