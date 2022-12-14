import { CategoriesModule } from './../models/categories/categories.module';
import { BookmarkModule } from './../models/bookmark/bookmark.module';
import { FilterByModule } from './../models/filter-by/filter-by.module';
import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service.service';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  constructor(private http: HttpClient, private httpService: HttpService) {}

  private _categories$ = new BehaviorSubject<CategoriesModule>({});
  public categories$ = this._categories$.asObservable();

  private _filterBy$ = new BehaviorSubject<FilterByModule>({
    category: '',
    bookmark: '',
  });

  public filterBy$ = this._filterBy$.asObservable();
  bookmarkURL = 'bookmark';
  bookmarks!: BookmarkModule[];

  public query(bookmarks: BookmarkModule[]) {
    this.bookmarks = bookmarks;
    const filterBy = this._filterBy$.getValue();
    var bookmarkDB = this.serviceOrder(bookmarks);
    this.passInPipes(filterBy, bookmarkDB);
  }

  public setFilterBy(filterBy: FilterByModule) {
    this._filterBy$.next(filterBy);
    this.query(this.bookmarks);
  }

  public remove(bookmarkId: string) {
    this.httpService
      .deleteBookmark(this.bookmarkURL, bookmarkId)
      .subscribe((res) => {
        console.log(res);

        this.getModel();
      });
  }

  public getModel() {
    // get the last value on _filterBy$ BehaviorSubject
    const filterBy = this._filterBy$.getValue();
    var bookmarkDB = {};
    this.httpService
      .get(this.bookmarkURL, {})
      .subscribe((db: BookmarkModule[]) => {
        this.bookmarks = db;
        bookmarkDB = this.serviceOrder(db);
        this.passInPipes(filterBy, bookmarkDB);
      });
  }

  private passInPipes(filterBy: FilterByModule, bookmarkDB: CategoriesModule) {
    if (filterBy.category) {
      var copyBookmarkDB: CategoriesModule = {};
      for (const category in bookmarkDB) {
        if (category.toLowerCase().includes(filterBy.category.toLowerCase())) {
          copyBookmarkDB[category] = bookmarkDB[category];
        }
        this._categories$.next(copyBookmarkDB);
      }
    } else if (filterBy.bookmark) {
      const bookmarks = {};
      for (const category in bookmarkDB) {
        bookmarks[category] = bookmarkDB[category].filter(
          (bookmark: BookmarkModule) => {
            return bookmark.name
              .toLowerCase()
              .includes(filterBy.bookmark.toLowerCase());
          }
        );
      }
      this._categories$.next(bookmarks);
    } else {
      this._categories$.next(bookmarkDB);
    }
  }

  // Categories arrange
  private serviceOrder(db: BookmarkModule[]) {
    const bookmarkDB = {};
    db.map((bookmark) => {
      if (!bookmarkDB.hasOwnProperty(bookmark.category)) {
        bookmarkDB[bookmark.category] = [];
      }
      bookmarkDB[bookmark.category].push(bookmark);
    });
    return bookmarkDB;
  }
}
