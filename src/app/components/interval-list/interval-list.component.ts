import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Timer } from '../../model/timer';
import { Routine, RoutineCycle } from '../../model/routine';
import { SaverService } from '../../services/saver.service';

@Component({
  selector: 'app-interval-list',
  templateUrl: './interval-list.component.html',
  styleUrls: ['./interval-list.component.scss'],
})
export class IntervalListComponent implements OnInit, OnChanges {
  @Input() allInterval: Timer[];
  canSave: boolean;

  constructor(private saveService: SaverService) {}

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
    this.saveService.SaveRoutine(new Routine('Test', [new RoutineCycle(this.allInterval)]));
  }
}
