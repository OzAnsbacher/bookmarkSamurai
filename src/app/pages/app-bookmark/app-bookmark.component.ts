import { Observable } from 'rxjs';
import { CategoriesModule } from './../../models/categories/categories.module';
import { BookmarkService } from './../../services/bookmark-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './app-bookmark.component.html',
  styleUrls: ['./app-bookmark.component.scss'],
})
export class AppBookmarkComponent implements OnInit {
  constructor(private bookmarkService: BookmarkService) {}

  categories$!:Observable<CategoriesModule>;
  // categories$!: CategoriesModule | object;

  ngOnInit(): void {
    this.bookmarkService.query();
    this.categories$ = this.bookmarkService.categories$;
        
  }
}
