import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimerComponent } from './components/timer/timer.component';


const routes: Routes = [
  { path: '', component: TimerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
