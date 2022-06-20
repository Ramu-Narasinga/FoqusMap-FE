import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineTaskModalComponent } from './timeline-task-modal.component';

describe('TimelineTaskModalComponent', () => {
  let component: TimelineTaskModalComponent;
  let fixture: ComponentFixture<TimelineTaskModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineTaskModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineTaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
