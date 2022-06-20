import { Component, OnInit, Input } from '@angular/core';
import { Timeline } from '../../constants';

@Component({
  selector: 'app-timeline-task',
  templateUrl: './timeline-task.component.html',
  styleUrls: ['./timeline-task.component.scss']
})
export class TimelineTaskComponent implements OnInit {

  @Input() task: Timeline = {
    label: '',
    slot: -1,
    startTime: '',
    endTime: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
