import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerComponent } from './components/timer/timer.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NewIntervalComponent } from './components/new-interval/new-interval.component';
import { IntervalListComponent } from './components/interval-list/interval-list.component';
import { Extensions } from './services/extensions';
import { ListImgComponent } from './components/imgs/list.component';
import { PauseImgComponent } from './components/imgs/pause.component';
import { PlayImgComponent } from './components/imgs/play.component';
import { PlusImgComponent } from './components/imgs/plus.component';
import { RefreshImgComponent } from './components/imgs/refresh.component';
import { MoonImgComponent } from './components/imgs/moon.component';
import { SunImgComponent } from './components/imgs/sun.component';
import { DisabledDirective } from './directives/disabled.directive';
import { MessageComponent } from './components/message/message.component';
import { SaveImgComponent } from './components/imgs/save.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    NewIntervalComponent,
    IntervalListComponent,
    ListImgComponent,
    PauseImgComponent,
    PlayImgComponent,
    PlusImgComponent,
    RefreshImgComponent,
    MoonImgComponent,
    SunImgComponent,
    DisabledDirective,
    MessageComponent,
    SaveImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Extensions],
  bootstrap: [AppComponent]
})
export class AppModule { }
