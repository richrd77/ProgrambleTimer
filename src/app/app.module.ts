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
import { DisabledDirective } from './directives/disabled.directive';
import { MessageComponent } from './components/message/message.component';
import { SaveImgComponent } from './components/imgs/save.component';
import { SaverService } from './services/saver.service';
import { Constants } from './constants';
import { RepositoryService } from './services/repo.service';
import { EyeImgComponent } from './components/imgs/eye.component';
import { TextBoxComponent } from './components/custom-controls/textbox.component';
import { ButtonComponent } from './components/custom-controls/button.component';
import { TableComponent } from './components/custom-controls/table.component';
import { ViewRoutineComponent } from './components/view-routine.component';
import { PanelComponent } from './components/custom-controls/panel.component';
import { GroupedTableComponent } from './components/grouped-table.component';
import { GraphImgComponent } from './components/imgs/graph.component';
import { AnimateScreenComponent } from './components/custom-controls/animate-screen.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { TrashImgComponent } from './components/imgs/trash.component';
import { ConfirmMessageComponent } from './components/dialogs/confirm-dialog.component';
import { SunImgComponent } from './components/imgs/sun.component';

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
    DisabledDirective,
    MessageComponent,
    SaveImgComponent,
    EyeImgComponent,
    TextBoxComponent,
    ButtonComponent,
    TableComponent,
    ViewRoutineComponent,
    PanelComponent,
    GroupedTableComponent,
    GraphImgComponent,
    AnimateScreenComponent,
    CustomDatePipe,
    TrashImgComponent,
    ConfirmMessageComponent,
    SunImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Extensions, SaverService, Constants, RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
