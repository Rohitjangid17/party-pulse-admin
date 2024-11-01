import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { TitleService } from '../../../shared/services/title.service';
import { CommonService } from '../../../shared/services/common.service';
import { TableComponent } from '../../../shared/components/table/table.component';

@Component({
  selector: 'app-parties',
  standalone: true,
  imports: [
    PageHeaderComponent,
    TableComponent
  ],
  templateUrl: './parties.component.html',
  styleUrl: './parties.component.scss'
})
export class PartiesComponent implements OnInit {
  pageTitle: string = "Parties";
  parties: any = [];

  constructor(
    private _titleService: TitleService,
    private _commonService: CommonService
  ) { }

  ngOnInit(): void {
    // set page title
    this._titleService.setTitle("Party Pulse: Comprehensive Party Planning List");

    this.getParties();
  }

  // get parties
  getParties = () => {
    this._commonService.getPartyList().subscribe(response => {
      this.parties = response;
      // console.log(this.parties);
    }, (error) => {
      console.log(error.message);
    });
  }
}
