import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-parties',
  standalone: true,
  imports: [PageHeaderComponent],
  templateUrl: './parties.component.html',
  styleUrl: './parties.component.scss'
})
export class PartiesComponent {
  pageTitle: string = "Parties"
}
