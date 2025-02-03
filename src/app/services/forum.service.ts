import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private apiUrl = 'http://your-backend-api-url/api';

  constructor(private http: HttpClient) {}

  getForums(): Observable<any> {
    return this.http.get(`${this.apiUrl}/forums`);
  }

  postForum(forumData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/forums`, forumData);
  }

  postComment(commentData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/comments`, commentData);
  }
}
