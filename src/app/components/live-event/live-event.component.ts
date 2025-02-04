import { Component, OnInit } from '@angular/core';
import { LiveEventService } from '../../services/live-event.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-live-event',
  templateUrl: './live-event.component.html',
  styleUrls: ['./live-event.component.scss'],
  imports:[CommonModule]
})
export class LiveEventComponent implements OnInit {
  events: any[] = [];

  constructor(private liveEventService: LiveEventService) {}

  ngOnInit() {
    this.liveEventService.getLiveEvents().subscribe(events => {
      this.events = events;
    });
  }
}
