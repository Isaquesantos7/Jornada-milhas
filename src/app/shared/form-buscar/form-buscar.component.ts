import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconButton } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDatepickerToggle } from '@angular/material/datepicker';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-form-buscar',
  standalone: true,
  imports: [
    CardComponent,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconButton,
    MatDatepickerModule,
    MatDatepickerToggle,
    MatButton
  ],
  templateUrl: './form-buscar.component.html',
  styleUrl: './form-buscar.component.scss'
})

export class FormBuscarComponent {
  protected variante: 'secondary' = 'secondary';
}
