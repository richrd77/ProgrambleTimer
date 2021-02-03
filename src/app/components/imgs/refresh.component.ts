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
  selector: 'app-refresh-img',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      class="refresh-img-class clickable"
      (click)="clickEvent($event)"
    >
      <path
      fill="var(--controls-color)"
        d="M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z"
        appDisabled [flag] ="disabled"
      [ngClass]="{'disabled': disabled}"/>
    </svg>
  `,
  styles: [
    `
      .refresh-img-class {
        height: 100%;
        width: 20%;
      }

      @media only screen and (max-width: 415px) and (orientation: portrait) {
        .refresh-img-class {
          height: 100%;
          width: 40%;
        }
      }
    `,
  ],
})
export class RefreshImgComponent implements OnInit, OnChanges {
  @Input() imgColor: string;
  @Input() disabled: boolean;
  @Output() clickEventListener: EventEmitter<any>;

  constructor() {
    this.clickEventListener = new EventEmitter<any>();
  }
  ngOnInit(): void {
    if (this.disabled) {
      this.imgColor = 'grey';
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (this.disabled) {
    //   this.imgColor = 'grey';
    // } else {
    //   this.imgColor = 'black';
    // }
  }

  clickEvent(e: any): void {
    if (!this.disabled) {
      this.clickEventListener.emit(e);
    }
  }
}
