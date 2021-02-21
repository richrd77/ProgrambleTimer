import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TableInputs, TableKey } from '../../model/table';
import { TableColType } from '../../model/enums/tableColumnTypes.enum';

@Component({
  selector: 'app-table',
  template: `<table class="table table-striped table-theme">
    <thead>
      <td *ngFor="let h of tblInput.Keys" class="noUI-control" scope="col">
        {{ h.DisplayText }}
      </td>
      <td *ngIf="tblInput.Keys[0].CanDelete" class="noUI-control">&nbsp;</td>
    </thead>
    <tbody>
      <ng-container *ngIf="tblInput">
        <tr mdbTableCol *ngFor="let t of tblInput.Items; let i = index">
          <td
            *ngFor="let k of tblInput.Keys"
            [ngClass]="{
              'normal-cell': IsNormalCell(k),
              'numeric-cell': IsSevenSegmentCell(k),
              'color-cell': IsColorCell(k)
            }"
            scope="row"
            class="noUI-control"
          >
            <ng-container
              *ngIf="IsColorCell(k); then colorCell; else normalCell"
            >
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
          <td *ngIf="tblInput.Keys[0].CanDelete">
            <app-trash-img
              (clickEventListener)="TrashImgClicked(i)"
            ></app-trash-img>
          </td>
        </tr>
      </ng-container>
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
export class TableComponent {
  @Input() tblInput: TableInputs<any>;
  @Output() rowClickEvent: EventEmitter<any> = new EventEmitter<any>();
  tableColType = TableColType;

  IsNormalCell(tblKey: TableKey): boolean {
    return tblKey.Type === this.tableColType.Normal;
  }

  IsSevenSegmentCell(tblKey: TableKey): boolean {
    return tblKey.Type === this.tableColType.SevenSegment;
  }

  IsColorCell(tblKey: TableKey): boolean {
    return tblKey.Type === this.tableColType.Color;
  }

  TrashImgClicked(ind: number): void {
    this.rowClickEvent.emit(this.tblInput.Items[ind]);
  }
}
