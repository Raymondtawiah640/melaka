import { Component, OnInit } from '@angular/core';
import { Loading } from '../loading/loading';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [Loading, CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  loading = true;
  currentSlide = 0;
  images = [
    'assets/img1.jpg',
    'assets/img2.jpg',
    'assets/img3.jpg'
  ];

  ngOnInit() {
    // Hide loader after 3 seconds
    setTimeout(() => {
      this.loading = false;
    }, 3000);

    // Auto-slide every 3 seconds
    setInterval(() => this.nextSlide(), 3000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
  }
}
