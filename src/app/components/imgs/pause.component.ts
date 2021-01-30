import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pause-img',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    class="pause-img-class clickable"
    (click)="clickEvent($event)"
  >
    <path
      [attr.fill]="imgColor"
      d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"
    />
  </svg>`,
  styles: [
    `
      .pause-img-class {
        height: 100%;
        width: 20%;
      }

      @media only screen and (max-width: 415px) and (orientation: portrait) {
        .pause-img-class {
          height: 100%;
          width: 50%;
        }
      }
    `,
  ],
})
export class PauseImgComponent {
  @Input() imgColor: string;
  @Output() clickEventListener: EventEmitter<any>;

  constructor() {
    this.clickEventListener = new EventEmitter<any>();
  }

  clickEvent(e: any): void {
    this.clickEventListener.emit(e);
  }
}
