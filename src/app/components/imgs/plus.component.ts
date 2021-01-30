import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-plus-img',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    class="plus-img-class clickable"
    (click)="clickEvent($event)"
  >
    <path
      [attr.fill]="imgColor"
      d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
    />
  </svg>`,
  styles: [
    `
      .plus-img-class {
        height: 100%;
        width: 20%;
      }

      @media only screen and (max-width: 415px) and (orientation: portrait) {
        .plus-img-class {
          height: 100%;
          width: 50%;
        }
      }
    `,
  ],
})
export class PlusImgComponent {
  @Input() imgColor: string;
  @Output() clickEventListener: EventEmitter<any>;

  constructor() {
    this.clickEventListener = new EventEmitter<any>();
  }

  clickEvent(e: any): void {
    this.clickEventListener.emit(e);
  }
}