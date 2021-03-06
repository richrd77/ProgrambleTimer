import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SettingService } from '../services/setting.service';
import { Settings } from '../model/settings';
import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import * as ip from '../model/input';
import { Constants } from '../constants';
import { Culture } from '../model/culture';

@Component({
  selector: 'app-settings',
  template: `
    <div #settingswrapper class="settings-wrapper">
      <div class="settings-header">
        <span class="glow-text-animation"> Settings</span>
        <span class="clickable settings-dismiss" (click)="ToggleSettings(true)"
          >&#10005;</span
        >
      </div>
      <div class="setting-content-wrapper">
        <div class="setting-content-itself">
          <label>
            specifiy how many months data to retain (in Months)
            <app-textbox
              [inputProperties]="archivingInputProperties"
              [initialValue]="archivingInitialValue"
              (text)="TextCapture('archive', $event)"
            ></app-textbox>
          </label>
        </div>
        <div class="setting-content-itself">
          <!-- vibration Enable -->
          Enable Vibration after end of every cycle?
          <app-yesno
            [initialValue]="vibrationEnabled"
            (ChoiceChanged)="CaptureChoice($event)"
          ></app-yesno>
        </div>
        <div class="setting-content-itself">
          <label>
            specifiy how long to vibrate (in Sec)
            <app-textbox
              [inputProperties]="vibrationInputProperties"
              [initialValue]="vibrationInitialValue"
              (text)="TextCapture('vibration', $event)"
            ></app-textbox>
          </label>
        </div>
        <div class="setting-content-itself">
          <label> TimeZone: {{ TimeZoneName }} </label>
          <select class="culture-ddl" [(ngModel)]="timeZone.Id">
            <option
              *ngFor="let c of cons.Cultures"
              [value]="c.Id"
            >
              {{ c.Name }}
            </option>
          </select>
        </div>
      </div>
      <div style="width: 7rem;float: right;margin-right: 2rem;">
        <app-button
          [btnText]="'Override'"
          (btnClick)="OverrideSettings()"
        ></app-button>
      </div>
    </div>
  `,
  styles: [
    `
      .settings-header {
        margin-left: 1rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
      }

      .settings-dismiss {
        float: right;
        margin-right: 0.5rem;
      }

      @keyframes blur-animation {
        from {
          filter: blur(1px);
        }
        to {
          filter: blur(10px);
        }
      }

      .blur-in {
        animation: blur-animation 1s linear 1;
        filter: blur(10px);
      }

      .settings-wrapper {
        height: 90vh;
        width: 90%;
        background-color: var(--bgColor);
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -200%);
        backdrop-filter: blur(var(--blur-val));
        border-radius: 2rem;
        padding: 1rem;
        color: var(--controls-color);
        overflow-y: auto;
      }

      .settings-back {
        transform: translate(-50%, 5%);
        transition: transform 0.35s ease-in-out;
      }

      .hide-back {
        transform: translate(-50%, -200%);
        transition: transform 0.35s ease-in-out;
      }

      .setting-content-wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        justify-items: center;
        grid-gap: 0;
      }

      .setting-content-itself {
        height: 200px;
        width: 200px;
        min-width: 200px;
        background-color: transparent;
        margin: 2rem;
        padding: 1em;
        border-radius: 1em;
        border: var(--controls-color) 0.1rem dashed;
      }

      .culture-ddl {
        font-size: 2rem;
        width: -moz-available; /* WebKit-based browsers will ignore this. */
        width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
        width: fill-available;
        border: 0.1rem solid var(--controls-color);
      }
    `,
  ],
})
export class SettingsComponent implements OnInit, OnChanges {
  @Input() showSettings: boolean;

  // allSettings: Settings;
  archivingInputProperties: ip.Input;
  vibrationInputProperties: ip.Input;

  archivingInitialValue: string;
  vibrationInitialValue: string;
  vibrationEnabled: boolean;
  timeZone: Culture;

  constructor(
    private rend: Renderer2,
    private sService: SettingService,
    public cons: Constants
  ) {
    this.archivingInputProperties = new ip.Input('number');
    this.vibrationInputProperties = new ip.Input('number');
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.archivingInitialValue = this.sService.Settings.AutoDeleteOldRecordsDuration.toString();
    this.vibrationInitialValue = this.sService.Settings.VibrationDuration.toString();
    this.vibrationEnabled = this.sService.Settings.VibrateEachCycleComplition;
    this.timeZone = this.sService.Settings.TimeZone;
    if (this.showSettings) {
      // this.allSettings = this.sService.Settings;
      this.ToggleSettings(false);
    }
  }
  ngOnInit(): void {
    if (this.showSettings) {
      this.ToggleSettings(false);
    }
  }

  ToggleSettings(remove: boolean): void {
    const settingsDiv = document.getElementsByClassName('settings-wrapper')[0];
    const glass = document.querySelector('.glass-card');
    settingsDiv.classList.toggle('settings-back');

    if (remove) {
      this.rend.removeClass(glass, 'blur-in');
      settingsDiv.classList.toggle('hide-back');
      setTimeout(() => {
        settingsDiv.classList.toggle('hide-back');
      }, 500);
    } else {
      this.rend.addClass(glass, 'blur-in');
    }
  }

  TextCapture(type: string, val: string): void {
    if (type === 'vibration') {
      this.vibrationInitialValue = val;
    } else if (type === 'archive') {
      this.archivingInitialValue = val;
    }
  }

  CaptureChoice(choice: boolean): void {
    this.vibrationEnabled = choice;
  }

  OverrideSettings(): void {
    const newSet = new Settings();
    newSet.AutoDeleteOldRecordsDuration = Number(this.archivingInitialValue);
    newSet.VibrationDuration = Number(this.vibrationInitialValue);
    newSet.VibrateEachCycleComplition = this.vibrationEnabled;
    newSet.TimeZone = this.timeZone;
    this.sService.Settings = newSet;
    this.ToggleSettings(true);
  }

  get TimeZoneName(): string {
    const foundOne = this.cons.Cultures.find(c => c.Id === this.timeZone.Id);
    this.timeZone.Name = foundOne.Name;
    return foundOne.Name;
  }
}
