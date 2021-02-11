import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-message',
  template: `<div [ngClass]="{ show: Show, hide: !Show }" class="dialog-box">
    {{ Message }}
  </div>`,
  styles: [
    `
      .dialog-box {
        z-index: 1051;
        width: auto;
        height: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -400%);
        background-color: #328b1a;
        border-radius: 5px;
        padding: 1.2rem;
        pointer-events: none;
        /* transition-property: all;
        transition-duration: 1s;
        transition-timing-function: ease-in-out;
        transition-delay: 0.5s; */
      }

      .show {
        opacity: 1;
      }

      .hide {
        opacity: 0;
        transition-property: all;
        transition-duration: 1s;
        transition-timing-function: ease-in-out;
        transition-delay: 0.5s;
      }

      .error-messge {
        background-color: #e5381d;
      }
    `,
  ],
})
export class MessageComponent implements OnInit, OnChanges {

  @Input() Message: string;
  @Input() Show: boolean;
  @Input() IsError: boolean;

  ngOnInit(): void {
    this.HideMessage(this.Show);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('chnged');
    console.log(this.Show);
    this.HideMessage(this.Show);
  }

  HideMessage(ip: boolean): void {
    if (ip) {
      if (this.IsError) {
        navigator.vibrate(250);
      }
      setTimeout(() => {
        this.Show = false;
      }, 2000);
    }
  }
}
