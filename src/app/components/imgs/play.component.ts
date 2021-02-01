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
  selector: 'app-play-img',
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    class="play-img-class clickable"
    (click)="clickEvent($event)"
  >
    <path
    fill="var(--controls-color)"
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
export class PlayImgComponent implements OnInit, OnChanges {
  @Input() imgColor: string;
  @Input() disabled: boolean;
  @Output() clickEventListener: EventEmitter<any>;

  constructor() {
    this.clickEventListener = new EventEmitter<any>();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.disabled) {
      this.imgColor = 'grey';
    } else {
      this.imgColor = 'black';
    }
  }
  ngOnInit(): void {
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
