import { BookmarkModule } from '../../models/bookmark/bookmark.module';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'bookmark-preview',
  templateUrl: './bookmark-preview.component.html',
  styleUrls: ['./bookmark-preview.component.scss'],
})
export class BookmarkPreviewComponent implements OnInit {
  constructor() {}

  @Input() bookmarks!: BookmarkModule[];
  @Input() isClose!: boolean;
  @Output() id: EventEmitter<any> = new EventEmitter();
  @Output() editBookmark: EventEmitter<any> = new EventEmitter();
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

  delete(id: string) {
    this.id.emit(id);
  }
  edit(editBookmark: BookmarkModule) {
    this.editBookmark.emit(editBookmark);
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.bookmarks, event.previousIndex, event.currentIndex);
  }
}
