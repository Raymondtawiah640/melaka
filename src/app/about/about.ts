import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About {
  openSection: string | null = null;
  screenWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
  }

  toggleSection(section: string) {
    this.openSection = this.openSection === section ? null : section;
  }
}
