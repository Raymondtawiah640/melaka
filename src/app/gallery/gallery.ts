import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true, // makes it standalone if you're using Angular 15+
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css'] // <-- should be styleUrls (plural)
})
export class Gallery {
  selectedImage: string | null = null;

  openImage(image: string) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
