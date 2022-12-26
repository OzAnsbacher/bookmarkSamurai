import {
  UserModule,
  UserLoginModule,
  UserIdModule,
} from './../models/user/user.module';
import { catchError, observable, tap, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookmarkModule } from '../models/bookmark/bookmark.module';
import { CategoriesModule } from '../models/categories/categories.module';

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

  public getById(endpoint: string, id: string): Observable<UserModule> {
    // public getById(endpoint: string, data: object | null) {
    const url = this.BASE_URL + endpoint + '/' + id;
    return this.http
      .get<UserModule>(url, { withCredentials: true })
      .pipe(tap({ error: (error) => console.log(error) }));
  }

  public delete(endpoint: string, id: string) {
    const url = this.BASE_URL + endpoint + '/' + id;
    return this.http
      .delete(url)
      .pipe(tap({ error: (error) => console.log(error) }));
  }

  public post(endpoint: string, data: UserModule | UserLoginModule) {
    const url = this.BASE_URL + endpoint;
    console.log('post', url, data);
    return this.http
      .post<UserLoginModule>(url, data, { withCredentials: true })
      .pipe(
        tap({
          error: (error) => {
            console.log(error);
          },
        })
      );
  }

  public getUser(endpoint: string): Observable<UserModule> {
    const url = this.BASE_URL + endpoint;
    return this.http.get<UserModule>(url, { withCredentials: true }).pipe(
      tap({
        error: (error) => {
          console.log(error);
        },
      })
    );
  }

  public logout(endpoint: string): Observable<string> {
    const url = this.BASE_URL + endpoint;
    return this.http.get<string>(url, { withCredentials: true }).pipe(
      tap({
        error: (error) => {
          console.log(error);
        },
      })
    );

    // return this.http.get<UserModule>(url, { withCredentials: true });
  }
}
