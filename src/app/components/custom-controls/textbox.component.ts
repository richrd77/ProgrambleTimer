import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as InputModel from '../../model/input';

@Component({
  selector: 'app-textbox',
  template: `
    <input
      [attr.type]="inputProperties.Type"
      class="new-interval-holder"
      [ngClass]="{ 'seven-segment': inputProperties.IsSevenSegmentFont }"
      [attr.placeholder]="inputProperties.PlaceHolder"
      (input)="ChangeEvent($event)"
    />
  `,
  styles: [
    `
      .new-interval-holder:focus,
      .new-interval-holder:active {
        outline: 0;
        box-shadow: var(--highlight-color) 0rem 0rem 0.75rem 0.01rem;
      }
      .new-interval-holder {
        display: inline-block;
        font-size: 2.5rem;
        margin-right: 0.5rem;
        color: var(--controls-color);
        width: 100%;
        height: 100%;
        border: 0.1rem solid var(--controls-color);
        background-color: var(--bgColor);
      }

      .seven-segment {
        text-align: right;
        font-family: D7CMB;
      }
    `,
  ],
})
export class TextBoxComponent {
  @Input() inputProperties: InputModel.Input;
  @Output() text: EventEmitter<string> = new EventEmitter<string>();

  ChangeEvent(event: any) {
    this.text.emit(event.target.value);
  }
}
