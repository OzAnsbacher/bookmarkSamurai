import { CategoriesModule } from './../models/categories/categories.module';
import { BookmarkModule } from './../models/bookmark/bookmark.module';
import { FilterByModule } from './../models/filter-by/filter-by.module';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  constructor() {}
  // constructor(private http: HttpClient) {}
  private _bookmarkDB: CategoriesModule = {
    General: [
      {
        id: 'a1',
        url: 'https://www.google.com/',
        name: 'Google',
      },
      {
        id: 'a2',
        url: 'https://youtube.com/',
        name: 'Youtube',
      },
      {
        id: 'a2',
        url: 'https://youtube.com/',
        name: 'Youtube',
      },
      {
        id: 'a2',
        url: 'https://youtube.com/',
        name: 'Youtube',
      },
    ],
    hobby: [
      {
        id: 'a1',
        url: 'https://www.linkedin.com/feed/',
        name: 'Linkedin',
      },
      {
        id: 'a2',
        url: 'https://facebook.com/',
        name: 'facebook',
      },
    ],
    business: [
      {
        id: 'a1',
        url: 'https://github.com/',
        name: 'github',
      },
      {
        id: 'a2',
        url: 'https://code-oz.web.app/',
        name: 'Oz-Code',
      },
    ],
    news: [
      {
        id: 'a1',
        url: 'https://www.ynet.co.il/',
        name: 'ynet',
      },
      {
        id: 'a2',
        url: 'https://www.mako.co.il/',
        name: 'mako',
      },
    ],
    hotels: [
      {
        id: 'a1',
        url: 'https://www.fattal.co.il/',
        name: 'fattal',
      },
      {
        id: 'a2',
        url: 'https://www.isrotel.co.il/',
        name: 'isrotel',
      },
    ],
  };

  //creat new BehaviorSubject
  private _categories$ = new BehaviorSubject<CategoriesModule>({});
  //build public variable asObservable to get emitted values on subscription
  public categories$ = this._categories$.asObservable();

  private _filterBy$ = new BehaviorSubject<FilterByModule>({
    category: '',
    bookmark: '',
  });
  public filterBy$ = this._filterBy$.asObservable();

  public query() {
    // get the last value on _filterBy$ BehaviorSubject
    const filterBy = this._filterBy$.getValue();
    const bookmarkDB = this._bookmarkDB;
    if (filterBy.category) {
      var copyBookmarkDB: CategoriesModule = {};
      for (const category in bookmarkDB) {
        if (category.toLowerCase().includes(filterBy.category.toLowerCase())) {
          copyBookmarkDB[category] = bookmarkDB[category];
        }
        this._categories$.next(copyBookmarkDB);
        //  const bookmarks[category]=bookmarkDB[category]}
      }
    } else if (filterBy.bookmark) {
      const bookmarks = {};
      for (const category in bookmarkDB) {
        bookmarks[category] = bookmarkDB[category].filter(({ name }) => {
          return name.toLowerCase().includes(filterBy.bookmark.toLowerCase());
        });
      }
      this._categories$.next(bookmarks);
    } else {
      this._categories$.next(bookmarkDB);
    }
  }

  public setFilterBy(filterBy: FilterByModule) {
    this._filterBy$.next(filterBy);
    this.query();
  }
}

