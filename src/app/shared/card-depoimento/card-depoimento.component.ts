import { Component, Input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-depoimento',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './card-depoimento.component.html',
  styleUrl: './card-depoimento.component.scss'
})

export class CardDepoimentoComponent {
  @Input() depoimento: string = '';
  @Input() autoria: string = '';
  @Input() avatar: string = '';
  @Input() altAvatar: string = '';
}
