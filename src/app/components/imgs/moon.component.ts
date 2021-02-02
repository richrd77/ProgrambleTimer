import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
  OnInit,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-moon-img',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    class="moon-img-class clickable"
    (click)="clickEvent($event)"
  >
    <path
      fill="var(--controls-color)"
      d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
    />
  </svg>`,
  styles: [
    `
      .moon-img-class {
        height: 100%;
        width: 20%;
      }

      @media only screen and (max-width: 415px) and (orientation: portrait) {
        .moon-img-class {
          height: 100%;
          width: 40%;
        }
      }
    `,
  ],
})
export class MoonImgComponent implements OnInit, OnChanges {
  @Input() imgColor: string;
  @Input() disabled: boolean;
  @Output() clickEventListener: EventEmitter<any>;

  constructor() {
    this.clickEventListener = new EventEmitter<any>();
  }
  ngOnInit(): void {
    if (this.disabled) {
      this.imgColor = 'grey';
    } else {
      this.imgColor = 'black';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.disabled) {
      this.imgColor = 'grey';
    } else {
      this.imgColor = 'black';
    }
  }

  clickEvent(e: any): void {
    if (!this.disabled) {
      this.clickEventListener.emit(e);
    }
  }
}