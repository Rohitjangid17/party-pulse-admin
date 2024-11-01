import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Login } from '../../../shared/interfaces/common';
import { MatButtonModule } from '@angular/material/button';
import { CommonService } from '../../../shared/services/common.service';
import { Router } from '@angular/router';
import { TitleService } from '../../../shared/services/title.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _commonService: CommonService,
    private _router: Router,
    private _titleService: TitleService
  ) {
    this.loginForm = this._formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this._titleService.setTitle("Party Pulse: Secure Login for Event Management");
  }

  // login user
  login = () => {
    const loginData: Login = {
      username: this.loginForm.get("username")?.value,
      password: this.loginForm.get("password")?.value
    }
    console.log(loginData);

    this._commonService.loginUser(loginData).subscribe((response: any) => {
      console.log(response);
      if (response.user && response.token) {
        console.log(response.token);
        localStorage.setItem("authToken", response.token);
        this._router.navigate(["/dashboard"]);
      }
    }, error => console.error('Login failed:', error));
  }
}
