import { Component, Input } from '@angular/core';
import { Timer } from '../../model/timer';

@Component({
  selector: 'app-interval-list',
  templateUrl: './interval-list.component.html',
  styleUrls: ['./interval-list.component.scss']
})
export class IntervalListComponent {
    @Input() allInterval: Timer[];

    getEl(t: Timer) {
        return { 'background-color': t.Color };
    }
}
