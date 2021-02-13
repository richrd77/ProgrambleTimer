import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { TableInputs, TableKey } from '../../model/table';
import { TableColType } from '../../model/enums/tableColumnTypes.enum';

@Component({
  selector: 'app-table',
  template: `<table class="table table-striped table-theme">
    <thead>
      <td *ngFor="let h of tblInput.Keys" scope="col">{{ h.DisplayText }}</td>
    </thead>
    <tbody *ngIf="tblInput">
      <tr mdbTableCol *ngFor="let t of tblInput.Items">
        <td
          *ngFor="let k of tblInput.Keys"
          [ngClass]="{
            'normal-cell': IsNormalCell(k),
            'numeric-cell': IsSevenSegmentCell(k),
            'color-cell': IsColorCell(k)
          }"
          scope="row"
        >
          <ng-container *ngIf="IsColorCell(k); then colorCell; else normalCell">
          </ng-container>
          <ng-template #colorCell>
            <span
              style="height: 1rem; width: 1rem; color: transparent"
              [ngStyle]="{ 'background-color': t.Color }"
              >Color</span
            >
          </ng-template>
          <ng-template #normalCell>
            {{ t[k.Key] }}
          </ng-template>
        </td>
      </tr>
    </tbody>
  </table>`,
  styles: [
    `
      .table-theme {
        color: var(--controls-color);
        background-color: var(--bgColor);
        border-color: var(--controls-color);
      }

      .normal-cell {
        word-break: break-all;
      }

      .numeric-cell {
        font-family: D7CMB;
      }

      .color-cell {
        word-break: unset;
      }
    `,
  ],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() tblInput: TableInputs<any>;
  tableColType = TableColType;
  ngOnInit(): void {}

  ngOnChanges() {}

  IsNormalCell(tblKey: TableKey): boolean {
    return tblKey.Type === this.tableColType.Normal;
  }

  IsSevenSegmentCell(tblKey: TableKey): boolean {
    return tblKey.Type === this.tableColType.SevenSegment;
  }

  IsColorCell(tblKey: TableKey): boolean {
    return tblKey.Type === this.tableColType.Color;
  }
}
