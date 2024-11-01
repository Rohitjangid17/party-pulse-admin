import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { TitleService } from '../../../shared/services/title.service';

@Component({
  selector: 'app-parties',
  standalone: true,
  imports: [PageHeaderComponent],
  templateUrl: './parties.component.html',
  styleUrl: './parties.component.scss'
})
export class PartiesComponent implements OnInit {
  pageTitle: string = "Parties";

  constructor(
    private _titleService: TitleService
  ){}

  ngOnInit(): void {
    // set page title
    this._titleService.setTitle("Party Pulse: Comprehensive Party Planning List");
  }
}
