import { BookmarkModule } from '../../models/bookmark/bookmark.module';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bookmark-preview',
  templateUrl: './bookmark-preview.component.html',
  styleUrls: ['./bookmark-preview.component.scss'],
})
export class BookmarkPreviewComponent implements OnInit {
  constructor() {}

  @Input() bookmarks!: BookmarkModule[] | null;
  @Input() isClose!: boolean;

  isHidden!: boolean;

  ngOnInit(): void {}

  ngOnChanges() {
    if (this.isClose)
      setTimeout(() => {
        this.isHidden = this.isClose;
      }, 400);
    else {
      this.isHidden = this.isClose;
    }
  }


}
