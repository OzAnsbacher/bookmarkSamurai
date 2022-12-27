import { UserService } from './../../services/user-service.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { BookmarkService } from 'src/app/services/bookmark-service.service';
import { BookmarkModule } from '../../models/bookmark/bookmark.module';

@Component({
  selector: 'bookmark-category',
  templateUrl: './bookmark-category.component.html',
  styleUrls: ['./bookmark-category.component.scss'],
})
export class BookmarkCategory implements OnInit {
  constructor(
    private bookmarkService: BookmarkService,
    private userService: UserService
  ) {}
  @Input() categoryVal!: BookmarkModule[] | null;
  @Input() categoryName!: string;

  category!: BookmarkModule[];
  isClose: boolean = false;
  isDisplay: boolean = true;
  isUser!: boolean;

  closeList() {
    if (!this.isDisplay) {
      this.isDisplay = !this.isDisplay;
      setTimeout(() => {
        this.isClose = !this.isClose;
      }, 100);
    } else {
      this.isClose = !this.isClose;
      setTimeout(() => {
        this.isDisplay = !this.isDisplay;
      }, 500);
    }
  }

  ngOnInit(): void {
    this.userService.isUser$.subscribe((isUser) => {
      this.isUser = isUser;
    });
  }

  delete(id: string) {
    if (this.isUser) {
      this.userService.remove(id);
    } else {
      this.bookmarkService.remove(id);
    }
  }
  edit(editBookmark: BookmarkModule) {
    window.open(
      `https://bookmark-samurai-new-tab.onrender.com/?title=${editBookmark.name}&url=${editBookmark.url}&category=${editBookmark.category}&id=${editBookmark._id}`,
      '_blank',
      ' titlebar=no, resizable=no, status=no, menubar=no, width=400px, height=400px, top=50px, left=50px'
    );
  }
}
