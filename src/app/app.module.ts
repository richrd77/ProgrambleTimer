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

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    NewIntervalComponent,
    IntervalListComponent
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
