import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YouTubeService {
  private apiKey = 'YOUR_YOUTUBE_API_KEY';
  private apiUrl = 'https://www.googleapis.com/youtube/v3/videos';

  constructor(private http: HttpClient) {}

  getVideoDetails(videoId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?id=${videoId}&key=${this.apiKey}&part=snippet,contentDetails,statistics`);
  }
}
