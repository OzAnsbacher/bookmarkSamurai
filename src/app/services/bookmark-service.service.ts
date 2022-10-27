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
        category: 'General',
      },
      {
        id: 'a2',
        url: 'https://youtube.com/',
        name: 'Youtube',
        category: 'General',
      },
      {
        id: 'a3',
        url: 'https://www.yahoo.com/',
        name: 'yahoo',
        category: 'General',
      },
      {
        id: 'a27',
        url: 'https://www.microsoft.com/he-il/edge?form=MI13F3&OCID=MI13F3',
        name: 'microsoft-edge',
        category: 'General',
      },
    ],
    'Social media': [
      {
        id: 'a5',
        url: 'https://www.linkedin.com/feed/',
        name: 'Linkedin',
        category: 'Social media',
      },
      {
        id: 'a6',
        url: 'https://facebook.com/',
        name: 'facebook',
        category: 'Social media',
      },
      {
        id: 'a16',
        url: 'https://www.instagram.com/',
        name: 'instagram',
        category: 'Social media',
      },
      {
        id: 'a17',
        url: 'https://www.tiktok.com/en/',
        name: 'tiktok',
        category: 'Social media',
      },
    ],
    business: [
      {
        id: 'a7',
        url: 'https://github.com/',
        name: 'github',
        category: 'business',
      },
      {
        id: 'a8',
        url: 'https://code-oz.web.app/',
        name: 'Oz-Code',
        category: 'business',
      },
      {
        id: 'a14',
        url: 'https://koshercode.netlify.app/',
        name: 'Kosher-code',
        category: 'business',
      },
      {
        id: 'a36',
        url: 'https://www.microsoft.com/he-il/',
        name: 'microsoft',
        category: 'business',
      },
    ],
    Management: [
      {
        id: 'a31',
        url: 'https://monday.com/',
        name: 'monday',
        category: 'Management',
      },
      {
        id: 'a32',
        url: 'https://trello.com/',
        name: 'trello',
        category: 'Management',
      },
      {
        id: 'a33',
        url: 'https://www.bookmarkninja.com/',
        name: 'bookmark ninja',
        category: 'Management',
      },
    ],
    hobby: [
      {
        id: 'a22',
        url: 'https://www.tiuli.com/',
        name: 'tiuli',
        category: 'hobby',
      },
      {
        id: 'a21',
        url: 'https://baliletayel.co.il/',
        name: 'baliletayel',
        category: 'hobby',
      },
      {
        id: 'a23',
        url: 'https://www.rzrclub.co.il/',
        name: 'rzrclub',
        category: 'hobby',
      },
    ],
    news: [
      {
        id: 'a9',
        url: 'https://www.ynet.co.il/',
        name: 'ynet',
        category: 'news',
      },
      {
        id: 'a20',
        url: 'https://www.now14.co.il/',
        name: 'now14',
        category: 'news',
      },
      {
        id: 'a17',
        url: 'https://www.kipa.co.il/',
        name: 'kipa',
        category: 'news',
      },
      {
        id: 'a18',
        url: 'https://walla.co.il/',
        name: 'walla',
        category: 'news',
      },
      {
        id: 'a19',
        url: 'https://www.foxnews.com/',
        name: 'foxnews',
        category: 'news',
      },
      {
        id: 'a10',
        url: 'https://www.mako.co.il/',
        name: 'mako',
        category: 'news',
      },
    ],
    hotels: [
      {
        id: 'a11',
        url: 'https://www.fattal.co.il/',
        name: 'fattal',
        category: 'hotels',
      },
      {
        id: 'a29',
        url: 'https://www.danhotels.co.il/',
        name: 'dan',
        category: 'hotels',
      },
      {
        id: 'a12',
        url: 'https://www.isrotel.co.il/',
        name: 'isrotel',
        category: 'hotels',
      },
      {
        id: 'a30',
        url: 'https://www.rimonimhotels.com/',
        name: 'rimonim',
        category: 'hotels',
      },
    ],
    Judaism: [
      {
        id: 'a36',
        url: 'https://www.yeshiva.org.il/',
        name: 'yeshiva',
        category: 'Judaism',
      },
      {
        id: 'a38',
        url: 'https://meirtv.com/',
        name: 'meirtv',
        category: 'Judaism',
      },
      {
        id: 'a35',
        url: 'https://harhamor.co.il/',
        name: 'har hamor',
        category: 'Judaism',
      },
      {
        id: 'a37',
        url: 'https://www.dirshu.co.il/',
        name: 'dirshu',
        category: 'Judaism',
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

  public remove(bookmarkId: string) {
    let bookmarks = this._bookmarkDB;
    // const petIdx = bookmarks.findIndex(pet => pet._id === bookmarkId)
    for (const category in bookmarks) {
      let bookmarkIdx = bookmarks[category].findIndex(({ id }) => {
        return id === bookmarkId;
      });
      if (bookmarkIdx) {
        bookmarks[category].splice(bookmarkIdx, 1);
        bookmarkIdx = 0;
      }
    }
    this._categories$.next(bookmarks);
    return of({});
  }
}
