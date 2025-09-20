import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  loading = true;
  currentSlide = 0;
  showFullStory = false; // <-- new property

  slides = [
    { src: 'assets/bus.jpg', text: 'Reliable Bus Advertising' },
    { src: 'assets/mk.jpg', text: 'Creative Marketing Solutions' },
    { src: 'assets/mk1.jpg', text: 'Boost Your Brand Visibility' },
    { src: 'assets/mk2.jpg', text: 'LED SCREEN' }
  ];

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);

    setInterval(() => this.nextSlide(), 5000);
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
}
