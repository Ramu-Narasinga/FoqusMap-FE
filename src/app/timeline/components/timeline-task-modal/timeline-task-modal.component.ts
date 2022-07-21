import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TimelineTask } from '../../constants';
@Component({
  selector: 'app-timeline-task-modal',
  templateUrl: './timeline-task-modal.component.html',
  styleUrls: ['./timeline-task-modal.component.scss']
})
export class TimelineTaskModalComponent implements OnInit {

  @Input() task: TimelineTask;

  @Output() addTaskEvent = new EventEmitter<TimelineTask>();

  constructor() {
    this.task = {
      label: '',
      startTime: '',
      endTime: '',
      slot: -1
    }
  }

  ngOnInit(): void {
  }

  handleSave() {
    console.log("this.task inside timeline-task-modal-component::", this.task);
    this.addTaskEvent.emit(this.task);
  }

}
