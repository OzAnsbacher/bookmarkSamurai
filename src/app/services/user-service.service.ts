import { BookmarkService } from 'src/app/services/bookmark-service.service';
import { BehaviorSubject } from 'rxjs';
import { UserModule } from './../models/user/user.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service.service';
import { BookmarkModule } from '../models/bookmark/bookmark.module';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private httpService: HttpService,
    private bookmarkService: BookmarkService
  ) {}

  isUser$ = new BehaviorSubject<boolean>(false);

  get(id: string) {
    this.httpService.getById('user', id).subscribe((user: UserModule) => {
      this.isUser$.next(true);
      this.bookmarkService.query(user.bookmarks);
    });
  }

  remove(id: string) {
    this.httpService.delete('user', id).subscribe((user: UserModule) => {
            this.bookmarkService.query(user?.bookmarks);

        });
  }

  getUser() {
    return this.httpService.getUser('user');
  }
}
