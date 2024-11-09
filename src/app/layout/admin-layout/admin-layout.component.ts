import { Component, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from 'express';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    RouterOutlet,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  sidebarOpened = true; // Initially opened
  sidebarMode: 'over' | 'side' = 'side'; // Default to 'side'

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe(result => {
        if (result.matches) {
          this.sidebarOpened = false; // Close sidebar on smaller screens
          this.sidebarMode = 'over'; // Use 'over' mode for smaller screens
        } else {
          this.sidebarOpened = true; // Open sidebar on larger screens
          this.sidebarMode = 'side'; // Use 'side' mode for larger screens
        }
      });
  }

  sidebarToggler() {
    this.sidebarOpened = !this.sidebarOpened; // Toggle the sidebar state
  }
}
