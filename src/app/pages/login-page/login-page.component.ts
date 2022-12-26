import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../services/auth.service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  profileForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });


  ngOnInit(): void {}
  onSubmit() {
    const { username, password } = this.profileForm.value;
      if (username && password) {
    this.authService.login({ username, password }).subscribe(user=>{
         if (user._id && user.username) {
          this.router.navigate(['/bookmark/' , user._id , user.username]);
        }
    })

    }
  }
}
