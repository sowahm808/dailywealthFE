import { Component, OnInit } from '@angular/core';
import { ForumService } from '../../services/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
  forumPosts: any[] = [];

  constructor(private forumService: ForumService) {}

  ngOnInit(): void {
    this.forumService.getForums().subscribe(posts => {
      this.forumPosts = posts;
    });
  }
}
