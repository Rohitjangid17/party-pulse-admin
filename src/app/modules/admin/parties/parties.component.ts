import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TitleService } from '../../../shared/services/title.service';
import { CommonService } from '../../../shared/services/common.service';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { CardComponent } from '../../../shared/components/card/card.component';
import { MatIcon } from '@angular/material/icon';
import { NgxLoadingModule } from 'ngx-loading';
import { RouterLink } from '@angular/router';
import { TableComponent } from '../../../shared/components/table/table.component';

@Component({
  selector: 'app-parties',
  standalone: true,
  imports: [
    PageHeaderComponent,
    NgFor,
    CardComponent,
    MatIcon,
    NgxLoadingModule,
    NgIf,
    NgClass,
    TableComponent,
    RouterLink
  ],
  templateUrl: './parties.component.html',
  styleUrl: './parties.component.scss'
})
export class PartiesComponent implements OnInit {
  pageTitle: string = "Parties";
  isListView: boolean = false;
  isLoader: boolean = false;
  parties: any = [];
  displayedColumns: string[] = ['name', 'company_name', 'mobile_no', 'email', 'credit_limit'];

  constructor(
    private _titleService: TitleService,
    private _commonService: CommonService,
    private _changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // Set page title
    this._titleService.setTitle("Party Pulse - Comprehensive Party Planning List");

    this.getParties();
    this.loadPageSettings();
  }

  // update local storage global page settings 
  loadPageSettings = () => {
    const pageSettings = localStorage.getItem("pageSettings");
    const settings = pageSettings ? JSON.parse(pageSettings) : null;

    if (settings && settings["partiesModule"]) {
      this.isListView = settings["partiesModule"].view === 1;
    } else {
      this.isListView = false;
      this.updateLocalStorage("grid");
    }
  }

  updateLocalStorage = (activeButton: string) => {
    const pageSettings = localStorage.getItem("pageSettings");
    const settings = pageSettings ? JSON.parse(pageSettings) : { partiesModule: { view: 0 } };

    if (activeButton === "grid") {
      if (settings["partiesModule"].view === 1) {
        settings["partiesModule"].view = 0; // Set to grid view
        this.isListView = false;
      }
    } else {
      if (settings["partiesModule"].view === 0) {
        settings["partiesModule"].view = 1; // Set to list view
        this.isListView = true;
      }
    }

    localStorage.setItem('pageSettings', JSON.stringify(settings));
    this._changeDetectorRef.markForCheck();
  }

  // Get parties
  getParties = () => {
    this.isLoader = true;
    this._commonService.getPartyList().subscribe((response: any) => {
      this.parties = response;
      console.log(this.parties);
      this.isLoader = false;
    }, (error) => {
      this.parties = [];
      this.isLoader = false;
      console.log(error.message);
    });
  }
}