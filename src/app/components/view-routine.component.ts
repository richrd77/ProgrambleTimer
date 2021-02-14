import { Component } from '@angular/core';
import { SaverService } from '../services/saver.service';
import { Routine } from '../model/routine';
import { TableKey } from '../model/table';
import { TableColType } from '../model/enums/tableColumnTypes.enum';

@Component({
  selector: 'app-view-routine',
  template: `
    <section *ngFor="let r of existingRoutine" style="margin-bottom:1rem">
      {{ r.Name }}
      <ng-container *ngFor="let c of r.Cycles">
        <app-grouped-table
          [Naam]="r.Name"
          [routineCycle1]="c"
          [displayKeys]="displayKeys"
        ></app-grouped-table>
      </ng-container>
    </section>
  `,
  styles: [``],
})
export class ViewRoutineComponent {
  existingRoutine: Routine[];
  displayKeys: TableKey[];

  constructor(private ser: SaverService) {
    this.existingRoutine = this.ser.GetRoutine();
    this.displayKeys = [
      new TableKey('Name', 'Name'),
      new TableKey('Seconds', 'Time (in sec)', TableColType.SevenSegment),
      new TableKey('Repetitions', 'Repetitions', TableColType.SevenSegment),
      new TableKey('Color', '', TableColType.Color),
    ];
  }
}
