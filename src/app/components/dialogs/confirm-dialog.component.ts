import { Component, Input } from "@angular/core";

@Component({
  selector: "app-confirm-dialog",
  template: `
    <div>
      <div
        style="text-align: center;
    line-height: 5rem;
    font-size: 1.5rem;"
      >
        {{ message }}
      </div>
      <div
        style="display: flex;
    justify-content: space-evenly;
    align-items: center;"
      >
        <app-button [btnText]="'Yes'"></app-button>
        <app-button [btnText]="'No'"></app-button>
      </div>
    </div>
  `,
  styles: [
    `
      :host >>> button {
        width: 5rem !important;
      }
    `,
  ],
})
export class ConfirmMessageComponent {
  @Input() message: string;
}
