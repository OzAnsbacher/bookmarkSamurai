import { BookmarkModule } from './../../models/bookmark/bookmark.module';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bookmark-previeew-li',
  templateUrl: './bookmark-previeew-li.component.html',
  styleUrls: ['./bookmark-previeew-li.component.scss'],
})
export class BookmarkPrevieewLiComponent implements OnInit {
  constructor() {}
  @Input() bookmark!: BookmarkModule | null;

  isOptions: boolean = false;

  ngOnInit(): void {}

  toggleOptions() {
    console.log(this.isOptions);

    this.isOptions = !this.isOptions;
  }

  delete() {
    console.log(this.bookmark);
  }

  edit() {
    console.log(this.bookmark);
  }
}
