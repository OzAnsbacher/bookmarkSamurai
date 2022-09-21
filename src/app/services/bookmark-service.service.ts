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
    ],
    hobby: [
      {
        id: 'a1',
        url: 'https://www.linkedin.com/feed/',
        name: 'Linkedin',
      },
      {
        id: 'a2',
        url: 'https://code-oz.web.app/',
        name: 'Oz-Code',
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
      for (const category in bookmarkDB) {
        if (category === filterBy.category)
          this._categories$.next({ category: bookmarkDB[category] });
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
}

// export class PetService {
//   constructor(private http: HttpClient) {}

//   // Mock the database
//   private _petsDb: Pet[] = [
//     { _id: 'p123', name: 'Penrose', age: 2, birthDate: new Date('2020-11-12') },
//     { _id: 'p124', name: 'Bobo', age: 6, birthDate: new Date('2021-8-30') },
//     { _id: 'p125', name: 'Gertrude', age: 1, birthDate: new Date('2021-11-1') },
//     {
//       _id: 'p126',
//       name: 'Popovich',
//       age: 62,
//       birthDate: new Date('1950-3-30'),
//     },
//   ];

//   private _pets$ = new BehaviorSubject<Pet[]>([]);
//   public pets$ = this._pets$.asObservable();

//   private _filterBy$ = new BehaviorSubject<PetFilter>({ term: '' });
//   public filterBy$ = this._filterBy$.asObservable();

//   public query() {
//     const filterBy = this._filterBy$.getValue();
//     const pets = this._petsDb.filter(({ name }) => {
//       return name.toLowerCase().includes(filterBy.term.toLowerCase());
//     });
//     this._pets$.next(pets);
//   }

//   public shouldAdoptPet() {
//     return this.http
//       .get<{ answer: string }>('https://yesno.wtf/api')
//       .pipe(map((res) => res.answer));
//   }

//   public getEmptyPet() {
//     return { name: '', age: 0, birthDate: new Date() };
//   }

//   public remove(petId: string) {
//     const pets = this._petsDb;
//     const petIdx = pets.findIndex((pet) => pet._id === petId);
//     pets.splice(petIdx, 1);
//     this._pets$.next(pets);
//     return of({});
//   }

//   public getById(petId: string): Observable<Pet | void> {
//     const pet = this._petsDb.find((pet) => pet._id === petId);
//     if (pet) return of({ ...pet });
//     return of();
//   }

//   public save(pet: Pet) {
//     return pet._id ? this._edit(pet) : this._add(pet);
//   }

//   public setFilterBy(filterBy: PetFilter) {
//     this._filterBy$.next(filterBy);
//     this.query();
//   }

//   private _add(pet: Pet) {
//     pet._id = this._makeId();
//     this._petsDb.push(pet);
//     this._pets$.next(this._petsDb);
//     return of(pet);
//   }

//   private _edit(pet: Pet) {
//     const pets = this._petsDb;
//     const petIdx = pets.findIndex((_pet) => _pet._id === pet._id);
//     pets.splice(petIdx, 1, pet);
//     this._pets$.next(pets);
//     return of(pet);
//   }

//   private _makeId(length = 5) {
//     var text = '';
//     var possible =
//       'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     for (var i = 0; i < length; i++) {
//       text += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     return text;
//   }
// }
