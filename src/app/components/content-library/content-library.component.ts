import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ContentService } from '../../services/content.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-library',
  templateUrl: './content-library.component.html',
  styleUrls: ['./content-library.component.scss'],
  imports:[CommonModule, ReactiveFormsModule ]
})
export class ContentLibraryComponent implements OnInit {
  searchControl  = new FormControl('');
  contents: any[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(value => this.searchContent(value));
  }

  searchContent(query: string | null): void {
    if (!query) { // Check for null or empty string
      this.contents = []; // Optionally reset the contents or handle the empty query case
      return;
    }
    this.contentService.searchContent(query).subscribe(searchResults => {
      this.contents = searchResults;
    });
  }
}
