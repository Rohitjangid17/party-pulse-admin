import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxLoadingModule } from 'ngx-loading';
import { PageHeaderComponent } from '../../../../shared/components/page-header/page-header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-new-party',
  standalone: true,
  imports: [
    NgIf,
    NgxLoadingModule,
    PageHeaderComponent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    // ReactiveFormsModule,
    MatButtonModule,
    NgxLoadingModule,
    NgIf,
    CdkTextareaAutosize,
    MatSlideToggleModule,
    MatDatepickerModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-new-party.component.html',
  styleUrl: './add-new-party.component.scss'
})
export class AddNewPartyComponent implements OnInit {
  pageTitle: string = "Add New Party";
  isLoader: boolean = false;

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.isLoader = true;
    setTimeout(() => {
      this.isLoader = false;
    }, 1200);

    this.getParty();
  }

  // get party
  getParty = () => {

  }
}
