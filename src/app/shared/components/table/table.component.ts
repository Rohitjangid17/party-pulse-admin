import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ["id", "name", "company_name", "mobile_no"];
  dataSource = new MatTableDataSource<any>([]);

  @Input() set list(data: any[]) {
    this.dataSource.data = data;
  }

  ngOnInit(): void {
    console.log(this.dataSource.data);
  }
}