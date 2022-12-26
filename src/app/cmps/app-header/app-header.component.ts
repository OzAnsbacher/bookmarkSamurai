import { AuthService } from './../../services/auth.service.service';
import { UserService } from 'src/app/services/user-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService
  ) {}
  isUser: boolean = false;
  ngOnInit(): void {
    this.userService.isUser$.subscribe((isUser) => {
      this.isUser = isUser;
    });
  }

  logout() {
    this.authService.logout();
  }
}
