import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private apiUrl = 'http://your-backend-api-url/api';

  constructor(private http: HttpClient) {}

  getAllContent(): Observable<any> {
    return this.http.get(`${this.apiUrl}/content`);
  }

  createContent(content: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/content`, content);
  }

  updateContent(contentId: number, content: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/content/${contentId}`, content);
  }

  deleteContent(contentId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/content/${contentId}`);
  }

  searchContent(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/content/search?query=${query}`);
  }

}
