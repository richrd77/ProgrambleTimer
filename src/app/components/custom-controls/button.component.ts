import { EventEmitter, Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button
      type="submit"
      class="timer-btn"
      [disabled]="disabled"
      (click)="BtnClicked($event)"
    >
      {{ btnText }}
    </button>
  `,
  styles: [
    `
      .timer-btn {
        border: solid 2px var(--controls-color);
        background-color: var(--bgColor);
        color: rgba(0, 0, 0, 0.8);
        border-radius: 5px;
        padding: 0.5rem;
        cursor: pointer;
        color: var(--controls-color);
        width:100%;
        height: 100%;
      }

      .timer-btn:hover,
      .timer-btn:focus {
        background-color: var(--controls-color);
        color: var(--bgColor);
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() btnText: string;
  @Input() disabled: boolean;
  @Output() btnClick: EventEmitter<any> = new EventEmitter<any>();

  BtnClicked(event: any): void {
    this.btnClick.emit(event);
  }
}
