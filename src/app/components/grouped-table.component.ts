import { Component, ViewChild, TemplateRef, Input } from '@angular/core';
import { RoutineCycle } from '../model/routine';
import { TableKey } from '../model/table';

@Component({
  selector: 'app-grouped-table',
  template: `
    <app-panel
      [PanelHeader]="header"
      [PanelBody]="body"
      style="margin-bottom:1rem"
    ></app-panel>
    <ng-template #head>
      <span>Performed on {{ routineCycle1.SavedOn | customDate }}</span>
    </ng-template>
    <ng-template #boody>
      <app-table
        [tblInput]="{ Items: routineCycle1.Cycles, Keys: displayKeys }"
        [tblRibbon]="tblRibbon"
      ></app-table>
    </ng-template>
    <ng-template #tblRibbon>
      <app-button [btnText]="'Perform this now'"></app-button>
    </ng-template>
  `,
  styles: [
    `
      :host >>> button {
        width: 9rem !important;
        margin: 1rem 0;
      }
    `,
  ],
})
export class GroupedTableComponent {
  @Input() routineCycle1: RoutineCycle;
  @Input() displayKeys: TableKey[];

  @ViewChild('head', { static: true })
  header: TemplateRef<any>;

  @ViewChild('boody', { static: true })
  body: TemplateRef<any>;

  @ViewChild('tblRibbon', { static: true })
  tblRibbon: TemplateRef<any>;
}
