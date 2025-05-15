import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.darkMode.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      // Check if user has a saved theme preference
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.setTheme(savedTheme === 'dark');
      } else {
        // Check if user prefers dark mode at OS level
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.setTheme(prefersDark.matches);
        
        // Listen for OS theme changes
        prefersDark.addEventListener('change', (e) => {
          this.setTheme(e.matches);
        });
      }
    }
  }

  setTheme(isDark: boolean) {
    if (isPlatformBrowser(this.platformId)) {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
    this.darkMode.next(isDark);
  }

  toggleTheme() {
    this.setTheme(!this.darkMode.value);
  }
}
