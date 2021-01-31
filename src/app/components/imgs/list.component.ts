import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-img',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    class="list-img-class clickable"
    (click)="clickEvent($event)"
  >
    <path
      [attr.fill]="imgColor"
      d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"
    />
  </svg>`,
  styles: [
    `
      .list-img-class {
        height: 100%;
        width: 20%;
      }

      @media only screen and (max-width: 415px) and (orientation: portrait) {
        .list-img-class {
          height: 100%;
          width: 40%;
        }
      }
    `,
  ],
})
export class ListImgComponent {
  @Input() imgColor: string;
  @Output() clickEventListener: EventEmitter<any>;

  constructor() {
    this.clickEventListener = new EventEmitter<any>();
  }

  clickEvent(e: any): void {
    this.clickEventListener.emit(e);
  }
}
