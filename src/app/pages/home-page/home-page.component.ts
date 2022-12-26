import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';
import { UserLoginModule, UserModule } from './../../models/user/user.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  user!: UserModule;

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      this.user = user;
      if (this.user) {
        this.userService.isUser$.next(true);
        this.router.navigate(['/bookmark/', user._id, user.username]);
      }
    });
  }
}
