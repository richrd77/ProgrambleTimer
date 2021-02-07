import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Timer } from '../../model/timer';

@Component({
  selector: 'app-interval-list',
  templateUrl: './interval-list.component.html',
  styleUrls: ['./interval-list.component.scss'],
})
export class IntervalListComponent implements OnInit, OnChanges {
  @Input() allInterval: Timer[];
  canSave: boolean;
  ngOnInit(): void {
    this.canSave = this.allInterval.length > 0;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.canSave = this.allInterval.length > 0;
  }

  getEl(t: Timer) {
    return { 'background-color': t.Color };
  }

  SaveImgClicked(e: any): void {
    console.log('save CLicked');
    console.log(e);
  }
}
