import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TimelineTaskComponent } from './timeline/components/timeline-task/timeline-task.component';
import { TimelineTaskModalComponent } from './timeline/components/timeline-task-modal/timeline-task-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    TimelineTaskComponent,
    TimelineTaskModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
