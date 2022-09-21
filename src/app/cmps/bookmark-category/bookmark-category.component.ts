import { Component, Input, OnInit, Output } from '@angular/core';
import { BookmarkModule } from '../../models/bookmark/bookmark.module';

@Component({
  selector: 'bookmark-category',
  templateUrl: './bookmark-category.component.html',
  styleUrls: ['./bookmark-category.component.scss'],
})
export class BookmarkCategory implements OnInit {
  constructor() {}
  @Input() categoryVal!: BookmarkModule[] | null;
  @Input() categoryName!: string;
  
  // @Output() onRemove = new EventEmitter<string>()

  category!: BookmarkModule[]
  ngOnInit(): void {}
}
