import { Component } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <div class="flex items-center justify-center cursor-pointer" (click)="themeService.toggleTheme()">
      <i class="fas" [class.fa-sun]="themeService.isDarkMode$ | async" [class.fa-moon]="!(themeService.isDarkMode$ | async)"></i>
    </div>
  `,
  styles: [`
    :host {
      display: inline-block;
    }
    i {
      font-size: 1.25rem;
      transition: transform 0.3s ease;
    }
    i:hover {
      transform: rotate(12deg);
    }
  `]
})
export class ThemeToggleComponent {
  constructor(public themeService: ThemeService) {}
}
