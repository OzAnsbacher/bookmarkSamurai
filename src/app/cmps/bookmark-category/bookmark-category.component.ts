import { Component, Input, OnInit, Output } from '@angular/core';
import { BookmarkService } from 'src/app/services/bookmark-service.service';
import { BookmarkModule } from '../../models/bookmark/bookmark.module';

@Component({
  selector: 'bookmark-category',
  templateUrl: './bookmark-category.component.html',
  styleUrls: ['./bookmark-category.component.scss'],
})
export class BookmarkCategory implements OnInit {
  constructor(private bookmarkService: BookmarkService) {}
  @Input() categoryVal!: BookmarkModule[] | null;
  @Input() categoryName!: string;

  // @Output() onRemove = new EventEmitter<string>()

  category!: BookmarkModule[];
  isClose: boolean = false;
  closeList() {
    this.isClose = !this.isClose;
  }

  ngOnInit(): void {}

  delete(id: string) {
    console.log('helloo', id);
    this.bookmarkService.remove(id);
  }
  edit(editBookmark: BookmarkModule) {
    window.open(`http://localhost:8080/?title=${editBookmark.name}&url=${editBookmark.url}&category=${editBookmark.category}`, '_blank',
    ' titlebar=no, resizable=no, status=no, menubar=no, width=400px, height=400px, top=50px, left=50px');
  }
}
