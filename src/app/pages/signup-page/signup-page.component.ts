import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'signUp-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignUpPageComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  profileForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    check: ['', Validators.required],
  });
  isPassVal: boolean = true;
  ngOnInit(): void {}

  onSubmit() {
    if (!this.isPassVal) return;
    console.log(this.profileForm.value);
  }
  conPassword() {
    const { password, check } = this.profileForm.value;
    if (password && check && password !== check) {
      this.isPassVal = false;
    }
  }
}
