import { Component, OnInit } from '@angular/core';
import { Loading } from '../loading/loading';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Loading, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  loading = true;
  currentSlide = 0;

  // Each slide has an image + text
  slides = [
    { src: 'assets/bus.jpg', text: 'Reliable Bus Advertising' },
    { src: 'assets/mk.jpg', text: 'Creative Marketing Solutions' },
    { src: 'assets/mk1.jpg', text: 'Boost Your Brand Visibility' }
  ];

  ngOnInit() {
    // Hide loader after 3 seconds
    setTimeout(() => {
      this.loading = false;
    }, 3000);

    // Auto-slide every 3 seconds
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
}
