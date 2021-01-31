import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-play-img',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    class="play-img-class clickable"
    (click)="clickEvent($event)"
  >
    <path
      [attr.fill]="imgColor"
      d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
    />
  </svg>`,
  styles: [
    `
      .play-img-class {
        height: 100%;
        width: 20%;
      }

      @media only screen and (max-width: 415px) and (orientation: portrait) {
        .play-img-class {
          height: 100%;
          width: 40%;
        }
      }
    `,
  ],
})
export class PlayImgComponent {
  @Input() imgColor: string;
  @Output() clickEventListener: EventEmitter<any>;

  constructor() {
    this.clickEventListener = new EventEmitter<any>();
  }

  clickEvent(e: any): void {
    this.clickEventListener.emit(e);
  }
}
