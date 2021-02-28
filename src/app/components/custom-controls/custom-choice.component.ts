import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-yesno',
  template: `
    <label class="switch">
      <input
        type="checkbox"
        (focus)="checkFocus($event)"
        (blur)="checkFocus($event)"
        [checked]="initialValue"
        (change)="CheckboxChanged($event)"
      />
      <span class="slider"></span>
    </label>
  `,
  styles: [
    `
      .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
      }

      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }

      .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: var(--controls-color);
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }

      input:checked + .slider {
        background-color: #56dd56;
      }

      input:focus + .slider {
        box-shadow: 0 0 1px #56dd56;
      }

      input:checked + .slider:before {
        transform: translateX(26px);
      }

      .focused {
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08),
          0 0 10px 2px var(--highlight-color) !important;
      }
    `,
  ],
})
export class CustomChoiceComponent {
  @Input() initialValue: boolean;
  @Output() ChoiceChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  CheckboxChanged(event: any): void {
    this.ChoiceChanged.emit(event.target.checked);
  }

  checkFocus(e: any): void {
    document.getElementsByClassName('slider')[0].classList.toggle('focused');
  }
}
