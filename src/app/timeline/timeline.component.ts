import { Component, OnInit } from '@angular/core';
import { timeline } from './constants';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  constructor() { }

  timeline = timeline;

  ngOnInit(): void {
  }

}
