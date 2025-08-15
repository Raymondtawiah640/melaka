import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class Footer implements AfterViewInit {

  ngAfterViewInit() {
    // Set current year
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear().toString();
    }

    // Toggle sections for mobile
    document.querySelectorAll<HTMLElement>('.toggle-section').forEach(button => {
      button.addEventListener('click', () => {
        const isDesktop = window.matchMedia('(min-width: 768px)').matches;
        if (isDesktop) return;

        const targetId = button.getAttribute('data-target');
        if (!targetId) return;

        const targetList = document.getElementById(targetId);
        const arrow = button.querySelector('span');
        const expanded = button.getAttribute('aria-expanded') === 'true';

        button.setAttribute('aria-expanded', (!expanded).toString());

        if (targetList) {
          if (targetList.classList.contains('hidden')) {
            targetList.classList.remove('hidden');
            targetList.style.maxHeight = targetList.scrollHeight + 'px';
          } else {
            targetList.style.maxHeight = targetList.scrollHeight + 'px';
            setTimeout(() => {
              targetList.style.maxHeight = '0';
            }, 10);
            setTimeout(() => {
              targetList.classList.add('hidden');
            }, 300);
          }
        }

        if (arrow) {
          arrow.classList.toggle('rotate-90');
        }
      });
    });
  }
}
