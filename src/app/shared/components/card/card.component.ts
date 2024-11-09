import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule,
    NgIf,
    MatIcon
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() data: any;
}
