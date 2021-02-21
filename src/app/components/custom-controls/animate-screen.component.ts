import { EventEmitter } from '@angular/core';
import {
  Component,
  Input,
  ElementRef,
  OnInit,
  OnChanges,
  SimpleChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-animate-screen',
  template: `
    <div class="screen-wrapper">
      <div
        class="screen"
        [ngClass]="{ hide: toggleScreen }"
        [ngStyle]="{ display: hideScreen ? 'none' : '' }"
      >
        <ng-container *ngTemplateOutlet="screen1"></ng-container>
      </div>
      <div
        class="screen"
        [ngClass]="{ hide: !toggleScreen }"
        [ngStyle]="{ display: !hideScreen ? 'none' : '' }"
      >
        <div class="clickable" style="width:fit-content;margin-bottom: 0.5rem;" (click)="GoBack()">&#8592; Back</div>
        <ng-container *ngTemplateOutlet="screen2"></ng-container>
      </div>
    </div>
  `,
  styles: [
    `
      .screen-wrapper {
        position: relative;
      }

      .screen {
        transition: opacity 0.5s ease-in-out;
      }

      .hide {
        opacity: 0;
      }
    `,
  ],
})
export class AnimateScreenComponent implements OnInit, OnChanges {
  hideScreen = false;
  private toggleScreenPrivateProperty = false;
  @Input() screen1: ElementRef;
  @Input() screen2: ElementRef;
  @Input() get toggleScreen() {
    return this.toggleScreenPrivateProperty;
  }

  set toggleScreen(newValue: boolean) {
    this.ToggleScreenDelay(newValue);
    this.toggleScreenPrivateProperty = newValue;
  }

  @Output() syncToggleFlag: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {}

  ToggleScreenDelay(newValue: boolean): void {
    setTimeout(() => {
      this.hideScreen = newValue;
    }, 500);
  }

  GoBack(): void {
    this.toggleScreen = !this.toggleScreen;
    this.syncToggleFlag.emit(this.toggleScreen);
  }
}
