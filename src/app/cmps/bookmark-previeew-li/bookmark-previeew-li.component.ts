import { BookmarkModule } from './../../models/bookmark/bookmark.module';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bookmark-previeew-li',
  templateUrl: './bookmark-previeew-li.component.html',
  styleUrls: ['./bookmark-previeew-li.component.scss'],
})
export class BookmarkPrevieewLiComponent implements OnInit {
  constructor() {}
  @Input() bookmark!: BookmarkModule | null;
  @Output() id: EventEmitter<any> = new EventEmitter();
  @Output() editBookmark: EventEmitter<any> = new EventEmitter();
  isOptions: boolean = false;

  ngOnInit(): void {}

  toggleOptions() {
    this.isOptions = !this.isOptions;
  }

  delete() {
    this.isOptions = !this.isOptions;
    if (this.bookmark?._id) this.id.emit(this.bookmark._id);
  }

  edit() {
    this.isOptions = !this.isOptions;
    if (this.bookmark) this.editBookmark.emit(this.bookmark);
  }
}
