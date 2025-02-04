// live-event.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LiveEventService {
  constructor() {}

  getLiveEvents(): Observable<any[]> {
    // This would typically be an HTTP request
    return of([
      {
        id: 1,
        name: "Web Development Conference",
        description: "Join us for a live session on the latest web development trends.",
        isLive: true,
        liveUrl: "https://www.youtube.com/embed/live_stream_video_id"
      },
      {
        id: 2,
        name: "Angular Workshop",
        description: "A live workshop on Angular best practices.",
        isLive: true,
        liveUrl: "https://www.youtube.com/embed/another_live_stream_video_id"
      }
    ]);
  }
}
