import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://your-backend-api-url/api';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<any> {
    return this.http.get(`${this.apiUrl}/courses`);
  }

  createCourse(course: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/courses`, course);
  }

  updateCourse(courseId: number, course: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/courses/${courseId}`, course);
  }

  deleteCourse(courseId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/courses/${courseId}`);
  }
}
