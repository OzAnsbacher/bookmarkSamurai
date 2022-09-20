import { Component, Input, OnInit, Output } from '@angular/core';
import { CategoryModule } from './../../models/category/category.module';

@Component({
  selector: 'bookmark-category',
  templateUrl: './bookmark-category.component.html',
  styleUrls: ['./bookmark-category.component.scss'],
})
export class BookmarkCategory implements OnInit {
  constructor() {}
  @Input() categoryVal!: CategoryModule | null;
  @Input() categoryName!: string;
  
  // @Output() onRemove = new EventEmitter<string>()

  category!: CategoryModule
  ngOnInit(): void {}
}
