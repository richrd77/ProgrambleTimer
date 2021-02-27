import { Component, OnInit, Renderer2 } from '@angular/core';
import { SaverService } from 'src/app/services/saver.service';
@Component({
  selector: 'app-theme',
  template: `
    <app-sun-img
      *ngIf="!isMoon"
      (clickEventListener)="ChangeTheme()"
    ></app-sun-img>
    <app-moon-img
      *ngIf="isMoon"
      (clickEventListener)="ChangeTheme()"
    ></app-moon-img>
  `,
  styles: [
    `
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(90deg);
          opacity: 0;
        }
      }
    `,
  ],
})
export class ThemeComponent implements OnInit {
  isMoon: boolean;
  constructor(private renderer: Renderer2, public saverService: SaverService) {
    this.isMoon = !this.saverService.IsDarkModeOn;
  }
  ngOnInit(): void {
    this.LoadTheme(this.saverService.IsDarkModeOn);
  }

  ChangeTheme(): void {
    setTimeout(() => {
      this.isMoon = !this.isMoon;
    }, 250);
    this.LoadTheme(!this.saverService.IsDarkModeOn);
    this.saverService.ToggleDarkMode();
  }

  LoadTheme(isDarkModeEnabled: boolean): void {
    if (isDarkModeEnabled) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
  }
}
