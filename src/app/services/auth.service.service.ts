import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';
import { BehaviorSubject, observable, Observable } from 'rxjs';
import { HttpService } from './http.service.service';
import {
  UserModule,
  UserIdModule,
  UserLoginModule,
} from './../models/user/user.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpService: HttpService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  private _userId$ = new BehaviorSubject<UserLoginModule>({
    username: '',
    _id: '',
  });

  public userId$ = this._userId$.asObservable();

  signUp(user: UserModule) {
    return this.httpService.post('auth/signup', user);
    // .subscribe((user: UserLoginModule) => {
    //   if (user) {
    //     this._userId$.next(user);
    //   }
    // });
  }

  login(user: UserLoginModule) {
    return this.httpService.post('auth/login', user);
  }

  logout() {
    this.httpService.logout('auth/logout').subscribe((msg) => {
      this.userService.isUser$.next(false);
      this.userService.isUser$.subscribe((isuser) => {});
      this.router.navigate(['']);
      console.log(msg);
    });
  }
}
