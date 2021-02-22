import {
  Component,
  ViewChild,
  TemplateRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { RoutineCycle, ImportRoutine } from '../model/routine';
import { TableKey } from '../model/table';
import { Timer } from '../model/timer';

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
      <app-button
        [btnText]="'Perform this now'"
        (btnClick)="btnClicked($event)"
      ></app-button>
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
  @Input() routineName: string;
  @Output() importClick: EventEmitter<ImportRoutine> = new EventEmitter<ImportRoutine>();

  @ViewChild('head', { static: true })
  header: TemplateRef<any>;

  @ViewChild('boody', { static: true })
  body: TemplateRef<any>;

  @ViewChild('tblRibbon', { static: true })
  tblRibbon: TemplateRef<any>;

  btnClicked(event: any) {
    this.importClick.emit(new ImportRoutine(this.routineName, this.routineCycle1.Cycles));
  }
}
