import { Component, OnInit } from '@angular/core';
import { TimelineTask, timeline } from './constants';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  timeline = timeline;
  showTaskPlaceholder: number = -1;

  ngOnInit(): void {
  }

  handleTimelineClick(tl: TimelineTask) {
    console.log("received click inside handleTimeClick::", tl);
    this.showTaskPlaceholder = tl.slot;
  }

  handleSave(tlData: TimelineTask) {
    console.log("inside handleSave, tlData:", tlData);
  }

}
