import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Timer } from '../../model/timer';

@Component({
    selector: 'app-timer',
    templateUrl: 'timer.component.html',
    styleUrls: ['timer.component.scss', 'timer-mobile.component.scss']
})
export class TimerComponent implements OnInit {
    allInterval: Array<Timer>;
    closeResult = '';
    newIntervalFormGroup: FormGroup;
    intervalStep = 5;
    validationStatus = true;
    validationMessage: string;
    mainTimerSeconds = 0;
    mainTimerMinutes = 0;
    mainTimerHours = 0;
    timerIntervalId: any;
    isRunning: boolean;
    imgNme = 'play';
    mainfontsize: string;
    intervalprogress: number;
    currentItem: Timer;
    currentIndex: number;
    mainTimerSecondsRaw = 0;
    menuItemName: string;

    @ViewChild('mymodal')
    private newItemModal: TemplateRef<any>;

    constructor(private modalService: NgbModal) {
        this.allInterval = [
            new Timer('First', 10, '#93984A'),
            new Timer('Second', 120, '#7E1DC5'),
        ];

        this.intervalprogress = 0;
        this.currentIndex = 0;
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
        this.currentItem = this.allInterval[this.currentIndex];
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
            this.StartTimer();
        }
    }

    DisplayTime(): string {
        // tslint:disable-next-line: max-line-length
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
        if (this.currentItem.Seconds === this.mainTimerSecondsRaw) {
            this.allInterval[this.currentIndex].Repetitions += 1;
            this.currentIndex += 1;
            if (this.currentIndex === this.allInterval.length) {
                this.currentIndex = 0;
            }
            this.currentItem = this.allInterval[this.currentIndex];
            // this.currentItem.Color = this.getRandomColor();
            this.mainTimerSecondsRaw = 0;
        }
        // chnge hrdcoded 60 to intervl seconds
        this.intervalprogress = ((this.mainTimerSecondsRaw * 100) / this.currentItem.Seconds);
    }

    StyleProgress() {
        // if (this.intervalprogress === 0)
        {
            return { width: this.intervalprogress + '%', 'background-color': this.currentItem?.Color };
        }// else {
        //     return { 'width': this.intervalprogress + '%' };
        // }
    }

    getRandomColor(): string {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    open(content: any) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
//            this.NewInterval.setValue(0);
//            this.NewIntervalKey.setValue('');
//            this.ClearValidationError();
        }, (reason) => {
//            this.NewInterval.setValue(0);
//            this.NewIntervalKey.setValue('');
//            this.ClearValidationError();
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

    RibbonItemClickEvent(name: string) {
        this.menuItemName = name;
        this.open(this.newItemModal);
    }

}
