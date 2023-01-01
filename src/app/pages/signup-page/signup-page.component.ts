import { AuthService } from './../../services/auth.service.service';
import { Observable, Subscription } from 'rxjs';
import { UserModule } from './../../models/user/user.module';
import { UserService } from './../../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'signUp-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignUpPageComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  profileForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    check: ['', Validators.required],
  });
  isPassVal: boolean = true;
  user$!: Observable<UserModule>;

  ngOnInit(): void {}

  onSubmit() {
    if (!this.isPassVal) return;
       if (this.profileForm.value.username && this.profileForm.value.password) {
      const user: UserModule = {
        username: this.profileForm.value.username,
        password: this.profileForm.value.password,
        bookmarks: [],
      };
      this.authService.signUp(user).subscribe(user=>{
        if (user._id && user.username) {
         this.router.navigate(['/bookmark/' , user._id , user.username]);
       }
   })
      // this.authService.userId$.subscribe(({ _id }) => {
      //   this.router.navigate(['/bookmark/' + _id]);
      // });
    }
  }
  conPassword() {
    const { password, check } = this.profileForm.value;
    if (password && check && password !== check) {
      this.isPassVal = false;
    }
    if (password && check && password === check) {
      this.isPassVal = true;
    }
  }
}
