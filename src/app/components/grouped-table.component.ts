import { Component, ViewChild, TemplateRef, Input } from '@angular/core';
import { RoutineCycle } from '../model/routine';
import { TableKey } from '../model/table';

@Component({
  selector: 'app-grouped-table',
  template: `
    <!-- {{ Naam }} -->
    <app-panel
      [PanelHeader]="header"
      [PanelBody]="body"
      style="margin-bottom:1rem"
    ></app-panel>
    <ng-template #head>
      <span
        >Performed on {{ routineCycle1.SavedOn | customDate }}</span
      >
    </ng-template>
    <ng-template #boody>
      <app-table
        [tblInput]="{ Items: routineCycle1.Cycles, Keys: displayKeys }"
      ></app-table>
    </ng-template>
  `,
  styles: [``],
})
export class GroupedTableComponent {
  @Input() Naam: string;
  @Input() routineCycle1: RoutineCycle;
  @Input() displayKeys: TableKey[];

  @ViewChild('head', { static: true })
  header: TemplateRef<any>;

  @ViewChild('boody', { static: true })
  body: TemplateRef<any>;
}
