import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class Gallery {
  selectedImage: string | null = null;

  images = [
    'assets/shirt1.jpg',
    'assets/Cup.jpg',
    'assets/New.jpg',
    'assets/shirt.jpg',
    'assets/g2.jpg',
    'assets/g1.jpg',
    'assets/g3.jpg',
    'assets/g3.jpg'
  ];

  openImage(image: string) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
