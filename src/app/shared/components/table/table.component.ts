import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    MatTableModule,
    NgFor
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] = [];
}
