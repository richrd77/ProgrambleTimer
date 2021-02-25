import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-sun-img",
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      class="sun-img-class clickable"
      (click)="clickEvent($event)"
    >
      <path
        fill="var(--controls-color)"
        d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
      ></path>
    </svg>
  `,
  styles: [
    `
      .sun-img-class {
        height: 100%;
        width: 100%;
      }

      @media only screen and (max-width: 415px) and (orientation: portrait) {
        .sun-img-class {
          height: 100%;
          width: 100%;
        }
      }

      .sun-img-class:hover {
        animation: rotate 5s ease-in-out 0s infinite;
      }

      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class SunImgComponent {
  @Input() imgColor: string;
  @Input() disabled: boolean;
  @Output() clickEventListener: EventEmitter<any>;

  constructor() {
    this.clickEventListener = new EventEmitter<any>();
  }

  clickEvent(e: any): void {
    if (!this.disabled) {
      this.clickEventListener.emit(e);
    }
  }
}
