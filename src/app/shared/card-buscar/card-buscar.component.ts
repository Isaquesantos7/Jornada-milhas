import { Component, Input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-buscar',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './card-buscar.component.html',
  styleUrl: './card-buscar.component.scss'
})

export class CardBuscarComponent {
  @Input() img: string = '';
  @Input() alt: string = '';
  @Input() titulo: string = '';
  @Input() preco: string = '';
}
