import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  Renderer2,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Timer } from '../../model/timer';
import { Color } from '../../model/color';
import { Extensions } from '../../services/extensions';
import { SaverService } from '../../services/saver.service';

@Component({
  selector: 'app-timer',
  templateUrl: 'timer.component.html',
  styleUrls: ['timer.component.scss', 'timer-mobile.component.scss'],
})
export class TimerComponent implements OnInit {
  @ViewChild('newItem')
  newItemTemplate: TemplateRef<any>;

  @ViewChild('list')
  listTemplate: TemplateRef<any>;

  @ViewChild('routine')
  routineTemplate: TemplateRef<any>;

  @ViewChild('gr')
  grTemplate: TemplateRef<any>;

  allInterval: Array<Timer>;
  allColors: Array<Color>;
  intervalStep = 5;
  mainTimerSeconds = 0;
  mainTimerMinutes = 0;
  mainTimerHours = 0;
  timerIntervalId: any;
  isRunning: boolean;
  intervalprogress: number;
  currentItem: Timer;
  currentIndex: number;
  mainTimerSecondsRaw = 0;
  menuItemName: string;
  modalHeader: string;
  isPlainTime = true;
  canaddNew = true;

  showMessage: boolean;
  message: string;
  isError: boolean;

  @ViewChild('mymodal')
  private newItemModal: TemplateRef<any>;

  screen1: TemplateRef<any>;
  screen2: TemplateRef<any>;
  toggleScreen: boolean;

  constructor(
    private modalService: NgbModal,
    private ext: Extensions,
    private renderer: Renderer2,
    private saverService: SaverService
  ) {
    this.allInterval = [];
    this.intervalprogress = 0;
    this.currentIndex = 0;
    this.allColors = [];
  }

  ngOnInit(): void {}

  StartTimer(): void {
    this.currentItem = this.allInterval[this.currentIndex];
    this.isRunning = true;
    this.canaddNew = false;
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
      this.canaddNew = !this.isPlainTime;
      this.isRunning = false;
    }
  }

  RunTimer(): void {
    if (this.allInterval.length > 0) {
      if (this.isRunning) {
        this.StopTimer();
      } else {
        this.StartTimer();
      }
    } else {
      if (this.isRunning) {
        this.StopTimer();
      } else {
        this.StartPlainTimer();
      }
    }
  }

  DisplayTime(): string {
    // tslint:disable-next-line: max-line-length
    return `${this.GetDisplayableTime(
      this.mainTimerHours
    )}:${this.GetDisplayableTime(
      this.mainTimerMinutes
    )}:${this.GetDisplayableTime(this.mainTimerSeconds)}`;
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
      this.ext.beep();
    }
    // chnge hrdcoded 60 to intervl seconds
    this.intervalprogress =
      (this.mainTimerSecondsRaw * 100) / this.currentItem.Seconds;
  }

  StyleProgress() {
    return {
      width: this.intervalprogress + '%',
      'background-color': this.currentItem?.Color,
    };
  }

  NewTimerEvent(newItem: Timer): void {
    if (
      !this.ext.ContiansItem(
        this.allInterval,
        newItem,
        (b, c) => b.Name === c.Name
      )
    ) {
      this.allInterval.push(newItem);
      this.modalService.dismissAll();
    }
  }

  open(content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      backdrop: 'static',
      keyboard: false,
    });
  }

  RibbonItemClickEvent(name: string) {
    this.menuItemName = name;
    if (name === 'New-Item') {
      this.ChangeModalHeader('New Interval', true);
      this.screen1 = this.newItemTemplate;
      this.screen2 = this.newItemTemplate;
      this.toggleScreen = false;
      this.open(this.newItemModal);
    } else if (name === 'view-routine') {
      this.modalHeader = 'Routine';
      this.screen1 = this.listTemplate;
      this.screen2 = this.routineTemplate;
      this.toggleScreen = !this.toggleScreen;
    } else if (name === 'view-graph') {
      this.modalHeader = 'Overview';
      this.toggleScreen = !this.toggleScreen;
      this.screen1 = this.listTemplate;
      this.screen2 = this.grTemplate;
    } else {
      this.ChangeModalHeader('List of Interval', true);
      this.toggleScreen = false;
      this.screen1 = this.listTemplate;
      this.screen2 = this.listTemplate;
      this.open(this.newItemModal);
    }
  }

  ClearThings(): void {
    this.mainTimerSeconds = 0;
    this.mainTimerMinutes = 0;
    this.mainTimerHours = 0;
    this.intervalprogress = 0;
    this.currentItem = null;
    this.currentIndex = 0;
    this.mainTimerSecondsRaw = 0;
    this.allInterval = [];
    clearInterval(this.timerIntervalId);
    this.isRunning = false;
    this.isPlainTime = false;
    this.canaddNew = true;
  }

  ChangeTheme(): void {
    this.ToggleTheme(!this.saverService.IsDarkModeOn());
  }

  ToggleTheme(isDarkModeEnabled: boolean): void {
    if (isDarkModeEnabled) {
      this.renderer.addClass(document.body, 'dark-mode');
    } else {
      this.renderer.removeClass(document.body, 'dark-mode');
    }
    this.saverService.ToggleDarkMode();
  }

  StartPlainTimer(): void {
    if (this.timerIntervalId) {
      clearInterval(this.timerIntervalId);
    }
    this.isRunning = true;
    this.isPlainTime = true;
    this.canaddNew = false;
    this.timerIntervalId = setInterval(() => {
      this.mainTimerSeconds += 1;
      this.mainTimerSecondsRaw += 1;
      this.CalculateTimer();
    }, 1000);
  }

  ShowSuccessMessage(msg: string): void {
    this.message = msg;
    this.showMessage = true;
    this.isError = false;
    setTimeout(() => (this.showMessage = false), 2000);
  }

  ShowErrorMessage(msg: string): void {
    this.message = msg;
    this.showMessage = true;
    this.isError = true;
    setTimeout(() => (this.showMessage = false), 2000);
  }

  ChangeScreenAnimation() {
    this.toggleScreen = !this.toggleScreen;
  }

  SyncScreenAnimation(event: boolean) {
    this.toggleScreen = event;
    this.ChangeModalHeader('');
  }

  ChangeModalHeader(header: string, overrideHeader: boolean = false): void {
    setTimeout(() => {
      if (overrideHeader) {
        this.saverService.ModalHeader = header;
        this.modalHeader = header;
      } else {
        this.modalHeader = this.saverService.ModalHeader;
      }
    }, 500);
  }

  DeleteTimer(index: Timer) {
    this.allInterval = this.allInterval.filter(
      (item) => item.Name !== index.Name
    );
  }
}
