import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { YouTubeService } from '../../services/you-tube.service';
import { CommonModule } from '@angular/common';
import {SafeUrlPipe} from '../../pipes/safe-url.pipe'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  imports:[CommonModule,SafeUrlPipe]
})
export class CourseComponent implements OnInit {
  courses: any[] = [];
  selectedCourse: any;

  constructor(private courseService: CourseService, private youtubeService: YouTubeService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
      this.courses.forEach(course => {
        if(course.videoId) {
          this.youtubeService.getVideoDetails(course.videoId).subscribe(videoDetails => {
            course.videoDetails = videoDetails;
          });
        }
      });
    });
  }

  selectCourse(course: any): void {
    this.selectedCourse = course;
  }
}
