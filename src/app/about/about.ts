import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Loading } from '../loading/loading';

@Component({
  selector: 'app-about',
  imports: [Loading, CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class About implements OnInit {
  loading = true;

  ngOnInit() {
    // Hide loader after 3 seconds
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }

}
