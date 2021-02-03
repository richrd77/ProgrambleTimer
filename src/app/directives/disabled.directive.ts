import {
  Directive,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appDisabled]',
})
export class DisabledDirective implements OnChanges {
  @Input() flag: boolean;
  constructor(private el: ElementRef) {
    this.ChangeColor();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.ChangeColor();
  }

  ChangeColor(): void {
    if (this.flag) {
      this.el.nativeElement.setAttribute('fill', 'var(--controls-disabled-color)');
    } else {
        this.el.nativeElement.setAttribute('fill', 'var(--controls-color)');
    }
  }
}
