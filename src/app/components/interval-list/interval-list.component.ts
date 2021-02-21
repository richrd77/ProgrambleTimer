import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Timer } from '../../model/timer';
import { Routine, RoutineCycle } from '../../model/routine';
import { SaverService } from '../../services/saver.service';
import { EventEmitter } from '@angular/core';
import * as InputModel from '../../model/input';
import { TableInputs, TableKey } from 'src/app/model/table';
import { TableColType } from 'src/app/model/enums/tableColumnTypes.enum';

@Component({
  selector: 'app-interval-list',
  templateUrl: './interval-list.component.html',
  styleUrls: ['./interval-list.component.scss'],
})
export class IntervalListComponent implements OnInit, OnChanges {
  @Input() allInterval: Timer[];
  @Output() DisplayMessage: EventEmitter<string> = new EventEmitter<string>();
  @Output() ViewRoutineClick: EventEmitter<string> = new EventEmitter<string>();
  @Output() DeleteTimerClick: EventEmitter<Timer> = new EventEmitter<Timer>();

  routineName: string;
  showListRibbon: boolean;
  showMessage: boolean;
  message: string;
  isError: boolean;
  routineNameInput: InputModel.Input;
  @ViewChild('newroutine')
  private routineTemplte: TemplateRef<any>;

  tbl: TableInputs<Timer>;

  constructor(
    private saveService: SaverService,
    private viewRef: ViewContainerRef
  ) {
    this.showListRibbon = true;
    this.routineNameInput = new InputModel.Input('text');
    this.routineNameInput.IsSevenSegmentFont = false;
    this.routineNameInput.PlaceHolder = 'Name of this routine?';
    this.tbl = new TableInputs<Timer>();
  }

  get canSave() {
    return this.allInterval.length > 0;
  }

  get canView() {
    const routine = this.saveService.GetRoutine();
    if (routine) {
      return routine.length > 0;
    }
    return false;
  }

  ngOnInit(): void {
    this.tbl.Keys = [
      new TableKey('Name', 'Name', undefined, true),
      new TableKey('Seconds', 'Time (in sec)', TableColType.SevenSegment),
      new TableKey('Repetitions', 'Repetitions', TableColType.SevenSegment),
      new TableKey('Color', '', TableColType.Color),
    ];
    this.tbl.Items = this.allInterval;
  }

  ngOnChanges(changes: SimpleChanges): void {}

  getEl(t: Timer) {
    return { 'background-color': t.Color };
  }

  SaveImgClicked(e: any): void {
    this.DisplayMessage.emit('Please provide routine Name');
    this.viewRef.createEmbeddedView(this.routineTemplte);
    this.showListRibbon = false;
  }

  SaveNewRoutine(): void {
    this.saveService.SaveRoutine(
      new Routine(this.routineName, [new RoutineCycle(this.allInterval)])
    );
    this.DisplayMessage.emit('routine Saved!!!');
    this.DoNotSaveNewRoutine();
  }

  DoNotSaveNewRoutine(): void {
    this.routineName = '';
    this.showListRibbon = true;
    this.viewRef.clear();
  }

  CatchTextEvent(event: any): void {
    this.routineName = event;
  }

  EyeClickEvent(evet: string): void {
    this.ViewRoutineClick.emit(evet);
  }

  TrashClickEvent(index: Timer): void {
    this.DeleteTimerClick.emit(index);
    setInterval(() => {
      this.ngOnInit();
    }, 500);
  }
}
