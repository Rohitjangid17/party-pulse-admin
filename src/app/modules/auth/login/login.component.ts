import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Login } from '../../../shared/interfaces/common';
import { MatButtonModule } from '@angular/material/button';
import { CommonService } from '../../../shared/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _commonService: CommonService,
    private _router: Router
  ) {
    this.loginForm = this._formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });
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
