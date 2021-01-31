import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

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
          width: 40%;
        }
      }
    `,
  ],
})
export class PauseImgComponent implements OnInit, OnChanges {
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
