import { CategoriesModule } from './../../models/categories/categories.module';
import { BookmarkModule } from '../../models/bookmark/bookmark.module';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss']
})
export class BookmarkListComponent implements OnInit {

  constructor() { }
  
@Input() categories!: CategoriesModule | null;

  ngOnInit(): void {
      
  }

}
