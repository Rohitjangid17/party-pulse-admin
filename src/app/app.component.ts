import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { NgxLoadingModule } from 'ngx-loading';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    NgxLoadingModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'party-pulse';
  // isLoader: boolean = false;

  // ngOnInit(): void {
  //   this.isLoader = true;
  //   setTimeout(() => {
  //     this.isLoader = false;
  //   }, 1500);
  // }
}
