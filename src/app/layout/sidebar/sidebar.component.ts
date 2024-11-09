import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgFor } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    RouterLink,
    NgFor,
    MatTooltipModule,
    RouterLinkActive
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  navlinkList: any[] = [];

  constructor() {
    this.navlinkList = [
      { id: 1, title: "Dashboard", icon: "dashboard", path: "/dashboard" },
      { id: 2, title: "Parties", icon: "celebration", path: "/parties" },
      { id: 3, title: "Events", icon: "event", path: "/events" },
      { id: 4, title: "Guest List", icon: "people", path: "/guest-list" },
      { id: 5, title: "Venues", icon: "room", path: "/venues" },
      { id: 6, title: "Catering", icon: "restaurant", path: "/catering" },
      { id: 7, title: "Budgeting", icon: "attach_money", path: "/budgeting" },
      { id: 8, title: "Invoices", icon: "receipt", path: "/invoices" },
      { id: 9, title: "Settings", icon: "settings", path: "/settings" },
    ]
  }
}
