import { flatten } from "@angular/compiler";
import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Timer } from '../../model/timer';

@Component({
    selector: 'timer',
    templateUrl: 'timer.component.html',
    styleUrls: ['timer.component.scss']
})
export class TimerComponent implements OnInit {
    allInterval: Map<string, Timer>
    closeResult = '';
    newIntervalFormGroup: FormGroup;
    intervalStep = 5;
    validationStatus = true;
    validationMessage: string;
    mainTimerSeconds = 0;
    mainTimerSecondsRaw = 0;
    mainTimerMinutes = 0;
    mainTimerHours = 0;
    timerIntervalId: any;
    isRunning: boolean;
    imgNme = 'play';
    mainfontsize: string;
    intervalprogress: number;
    currentIntervalNme: string;

    @ViewChild('mymodal')
    private newItemModal: TemplateRef<any>;

    constructor(private modalService: NgbModal) {
        this.allInterval = new Map<string, Timer>();
        this.allInterval.set('First', new Timer('First', 10));
        this.allInterval.set('First1', new Timer('First1', 10));
        this.allInterval.set('First2', new Timer('First2', 10));
        this.allInterval.set('First3', new Timer('First3', 10));
        this.allInterval.set('First4', new Timer('First4', 10));
        this.allInterval.set('First5', new Timer('First5', 10));
        this.allInterval.set('First6', new Timer('First6', 10));
        this.allInterval.set('First7', new Timer('First7', 10));

        this.allInterval.set('First8', new Timer('First8', 10));
        this.allInterval.set('First9', new Timer('First9', 10));
        this.allInterval.set('First10', new Timer('First10', 10));
        this.allInterval.set('First11', new Timer('First11', 10));
        this.allInterval.set('First12', new Timer('First12', 10));
        this.allInterval.set('First13', new Timer('First13', 10));
        this.allInterval.set('First14', new Timer('First14', 10));
        this.allInterval.set('First15', new Timer('First15', 10));

        this.intervalprogress = 0;
    }

    ngOnInit(): void {
        this.newIntervalFormGroup = new FormGroup({
            newIntervalKey: new FormControl('', Validators.required),
            newInterval: new FormControl(0, Validators.required)
        });
    }

    OnResize(e): void {
        console.log(e.target.innerWidth);
        console.log(e.target.innerHeight);
    }

    StartTimer(): void {
        this.currentIntervalNme = this.allInterval.values().next().value.Name;
        this.isRunning = true;
        this.ChngeIcon();
        if (this.timerIntervalId) {
            clearInterval(this.timerIntervalId);
        }
        this.timerIntervalId = setInterval(() => {
            this.mainTimerSeconds += 1;
            this.mainTimerSecondsRaw += 1;
            this.CalculateProgress();
            this.CalculateTimer();
        }, 1000);
    }

    StopTimer(): void {
        if (this.timerIntervalId) {
            clearInterval(this.timerIntervalId);
            this.isRunning = false;
            this.ChngeIcon();
        }
    }

    ChngeIcon(): void {
        if (this.isRunning) {
            this.imgNme = 'pause';
        } else {
            this.imgNme = 'play';
        }
    }

    RunTimer(): void {
        if (this.isRunning) {
            this.StopTimer();
        } else {
            this.StartTimer()
        }
    }

    DisplayTime(): string {
        return `${this.GetDisplayableTime(this.mainTimerHours)}:${this.GetDisplayableTime(this.mainTimerMinutes)}:${this.GetDisplayableTime(this.mainTimerSeconds)}`;
    }

    GetDisplayableTime(val: number): string {
        if (val < 10) {
            return `0${val}`;
        }
        return `${val}`;
    }

    CalculateTimer(): void {
        if (this.mainTimerSeconds === 60) {
            this.mainTimerMinutes += Math.trunc(this.mainTimerSeconds / 60);
            this.mainTimerSeconds = this.mainTimerSeconds % 60;
        }
        if (this.mainTimerMinutes === 60) {
            this.mainTimerHours += Math.trunc(this.mainTimerMinutes / 60);
            this.mainTimerMinutes = this.mainTimerMinutes % 60;
        }
    }

    CalculateProgress(): void {
        const currentItem = this.allInterval.get(this.currentIntervalNme);

        //chnge hrdcoded 60 to intervl seconds
        this.intervalprogress = ((this.mainTimerSeconds * 100) / 60);
    }

    AddNewInterval(): void {
        if (Number(this.NewInterval.value) > 0 && this.NewIntervalKey.value) {
            if (this.allInterval.has(this.NewIntervalKey.value)) {
                this.ShowValidationError('Try different Name for this interval');
            } else {
                this.ClearValidationError();
                this.allInterval.set(this.NewIntervalKey.value, new Timer(this.NewIntervalKey.value, Number(this.NewInterval.value)));
                this.modalService.dismissAll('');
            }
        } else {
            this.ShowValidationError('One or more details are missing');
        }
    }

    IncreaseInterval() {
        this.NewInterval.setValue(Number(this.NewInterval.value) + this.intervalStep);
    }

    DecreaseInterval() {
        if (Number(this.NewInterval.value) > 0) {
            this.NewInterval.setValue(Number(this.NewInterval.value) - this.intervalStep);
        }
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

    open(content: any) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.NewInterval.setValue(0);
            this.NewIntervalKey.setValue('');
            this.ClearValidationError();
        }, (reason) => {
            this.NewInterval.setValue(0);
            this.NewIntervalKey.setValue('');
            this.ClearValidationError();
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

}