import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Color } from 'src/app/model/color';
import { Timer } from 'src/app/model/timer';
import { Extensions } from '../../services/extensions';

@Component({
  selector: 'app-new-interval',
  templateUrl: './new-interval.component.html',
  styleUrls: ['./new-interval.component.scss'],
})
export class NewIntervalComponent implements OnInit {
  newIntervalFormGroup: FormGroup;
  validationStatus: boolean;
  validationMessage: string;
  intervalStep = 5;
  clicked = false;

  @Input() existingColors: Array<Color>;

  @Output() newlyCreatedItem: EventEmitter<Timer>;

  constructor(private ext: Extensions) {
    this.validationStatus = true;
    this.newlyCreatedItem = new EventEmitter<Timer>();
  }

  ngOnInit(): void {
    this.newIntervalFormGroup = new FormGroup({
      newIntervalKey: new FormControl('', Validators.required),
      newInterval: new FormControl(0, Validators.required),
    });
  }

  get NewIntervalKey() {
    return this.newIntervalFormGroup.get('newIntervalKey');
  }

  get NewInterval() {
    return this.newIntervalFormGroup.get('newInterval');
  }

  ShowValidationError(msg: string) {
    this.validationStatus = false;
    this.validationMessage = msg;
  }

  ClearValidationError() {
    this.validationStatus = true;
    this.validationMessage = '';
  }

  IncreaseInterval() {
    this.NewInterval.setValue(
      Number(this.NewInterval.value) + this.intervalStep
    );
  }

  DecreaseInterval() {
    if (Number(this.NewInterval.value) > 0) {
      this.NewInterval.setValue(
        Number(this.NewInterval.value) - this.intervalStep
      );
    }
  }

  AddNewInterval(): void {
    this.clicked = true;
    if (Number(this.NewInterval.value) > 0 && this.NewIntervalKey.value) {
      this.newlyCreatedItem.emit(
        new Timer(
          this.NewIntervalKey.value,
          Number(this.NewInterval.value),
          this.getRandomColor().GetColor()
        )
      );
      this.ClearValidationError();
      // if (this.allInterval.has(this.NewIntervalKey.value)) {
      //     this.ShowValidationError('Try different Name for this interval');
      // } else {
      //     this.ClearValidationError();
      //     this.allInterval.set(this.NewIntervalKey.value, new Timer(this.NewIntervalKey.value, Number(this.NewInterval.value)));
      //     this.modalService.dismissAll('');
      // }
    } else {
      this.ShowValidationError('One or more details are missing');
    }
    this.clicked = false;
  }

  getRandomColor(): Color {
    let newColor: Color = null;
    while (true) {
      const randomColor = () => Math.floor(Math.random() * 255);
      newColor = new Color(randomColor(), randomColor(), randomColor());
      if (
        !this.ext.ContiansItem(
          this.existingColors,
          newColor,
          (k: Color, j: Color) => k.r === j.r && k.g === j.g && k.b === j.b
        )
      ) {
        this.existingColors.push(newColor);
        break;
      }
    }
    return newColor;
  }

//   ContiansItem(obj: Color): boolean {
//     if (this.existingColors.length > 0) {
//       return (
//         this.existingColors.filter(
//           (k: Color) => k.r === obj.r && k.g === obj.g && k.b === obj.b
//         ).length > 0
//       );
//     }
//     return false;
//   }
}