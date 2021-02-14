import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-panel',
  template: `
    <div class="collapsible-wrapper">
      <div
        class="collapsible"
        (click)="PanelToggle()"
        [ngClass]="{
          'collapsible-show': isShowing,
          'collapsible-hide': !isShowing
        }"
      >
        <ng-container *ngTemplateOutlet="PanelHeader"></ng-container>
      </div>
      <div *ngIf="isShowing" style="margin-left: 1.25rem;">
        <ng-container *ngTemplateOutlet="PanelBody"></ng-container>
      </div>
    </div>
  `,
  styles: [
    `
      .collapsible-wrapper {
        margin-bottom: 1rem;
      }
      .collapsible {
        border: 0.01rem solid var(--controls-color);
        width: auto;
        padding: 1.25rem;
        cursor: pointer;
        position: relative;
        user-select: none;
      }

      .collapsible-hide::before {
        content: "";
        width: 0;
        height: 0;
        border-top: 0.5rem solid transparent;
        border-bottom: 0.5rem solid transparent;
        border-left: 0.5rem solid var(--controls-color);
        position: absolute;
        left: 0.5rem;
        top: 32%;
      }

      .collapsible-show::before {
        content: "";
        width: 0;
        height: 0;
        border-right: 0.5rem solid transparent;
        border-left: 0.5rem solid transparent;
        border-top: 0.5rem solid var(--controls-color);
        position: absolute;
        left: 0.05rem;
        top: 38%;
      }

      .collapsible-content {
        display: none;
      }

      .collapsible-content-show {
        display: block;
        /* padding: 1.25rem; */
        margin-left: 1.25rem;
      }
    `,
  ],
})
export class PanelComponent {
  @Input() PanelHeader: TemplateRef<any>;
  @Input() PanelBody: TemplateRef<any>;
  isShowing: boolean;
  PanelToggle(): void {
    this.isShowing = !this.isShowing;
  }
}
