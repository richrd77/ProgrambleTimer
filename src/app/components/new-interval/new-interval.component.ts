import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-interval',
  templateUrl: './new-interval.component.html',
  styleUrls: ['./new-interval.component.scss']
})
export class NewIntervalComponent implements OnInit {
    newIntervalFormGroup: FormGroup;
    validationStatus: boolean;
    validationMessage: string;
    intervalStep = 5;

    constructor() {

    }

    ngOnInit(): void {
        this.newIntervalFormGroup = new FormGroup({
            newIntervalKey: new FormControl('', Validators.required),
            newInterval: new FormControl(0, Validators.required)
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
        this.NewInterval.setValue(Number(this.NewInterval.value) + this.intervalStep);
    }

    DecreaseInterval() {
        if (Number(this.NewInterval.value) > 0) {
            this.NewInterval.setValue(Number(this.NewInterval.value) - this.intervalStep);
        }
    }

    AddNewInterval(): void {
        // if (Number(this.NewInterval.value) > 0 && this.NewIntervalKey.value) {
        //     if (this.allInterval.has(this.NewIntervalKey.value)) {
        //         this.ShowValidationError('Try different Name for this interval');
        //     } else {
        //         this.ClearValidationError();
        //         this.allInterval.set(this.NewIntervalKey.value, new Timer(this.NewIntervalKey.value, Number(this.NewInterval.value)));
        //         this.modalService.dismissAll('');
        //     }
        // } else {
        //     this.ShowValidationError('One or more details are missing');
        // }
    }
}
