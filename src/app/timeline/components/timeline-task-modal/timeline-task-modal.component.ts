import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-task-modal',
  templateUrl: './timeline-task-modal.component.html',
  styleUrls: ['./timeline-task-modal.component.scss']
})
export class TimelineTaskModalComponent implements OnInit {

  task: {
    title: string
  } = {
    title: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
