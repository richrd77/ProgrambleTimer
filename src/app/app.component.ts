import { Component } from '@angular/core';
import { TableInputs, TableKey } from './model/table';
import { Timer } from './model/timer';
import { TableColType } from './model/enums/tableColumnTypes.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ProgrmbleTimer';
  tbl: TableInputs<Timer>;
  constructor() {
    this.tbl = new TableInputs<Timer>();
    this.tbl.Items = [
      new Timer('Test', 12, 'red'),
      new Timer('Test1', 121, 'blue'),
      new Timer('Test2', 1212, 'grey'),
    ];

    this.tbl.Keys = [
      new TableKey('Name', 'Name'),
      new TableKey('Seconds', 'Seconds', TableColType.SevenSegment),
      new TableKey('Color', 'Color', TableColType.Color),
    ];
  }
}
