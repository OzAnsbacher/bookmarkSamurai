import { catchError, observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookmarkModule } from '../models/bookmark/bookmark.module';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  // BASE_URL = '//localhost:3030/api/';
  BASE_URL = '/api/';

  public get(endpoint: string, data: object | null) {
    return this.http
      .get<BookmarkModule[]>(this.BASE_URL + endpoint)
      .pipe(tap({ error: (error) => console.log(error) }));
  }

  public delete(endpoint: string, id: string) {
    const url = this.BASE_URL + endpoint + '/' + id;
     return this.http
      .delete(url)
      .pipe(tap({ error: (error) => console.log(error) }));
  }
}
