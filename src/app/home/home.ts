import { Component, OnInit } from '@angular/core';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  loading = true;
  currentSlide = 0;
  showFullStory = false; // <-- new property
  autoPlay: any;
  isMenuOpen = false;

  slides = [
    {
      src: 'assets/bus.jpg',
      title: 'Welcome to Our Platform',
      subtitle: 'Discover amazing solutions for your business',
      buttonText: 'Learn More'
    },
    {
      src: 'assets/mk.jpg',
      title: 'Team Collaboration',
      subtitle: 'Work together seamlessly from anywhere',
      buttonText: 'Get Started'
    },
    {
      src: 'assets/mk1.jpg',
      title: 'Your Workspace',
      subtitle: 'Create your perfect work environment',
      buttonText: 'Explore Now'
    }
  ];

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);

    this.autoPlay = setInterval(() => this.nextSlide(), 5000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  toggleStory() {
    this.showFullStory = !this.showFullStory;
  }

  pauseAutoPlay() {
    clearInterval(this.autoPlay);
  }

  resumeAutoPlay() {
    this.autoPlay = setInterval(() => this.nextSlide(), 5000);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
