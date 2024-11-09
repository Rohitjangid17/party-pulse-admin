import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { TitleService } from '../../../shared/services/title.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [PageHeaderComponent,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  pageTitle: string = "Dashboard";

  constructor(
    private _titleService: TitleService
  ) { }

  ngOnInit(): void {
    // set page title
    this._titleService.setTitle("Party Pulse: Event Management Dashboard Overview");
  }
}
