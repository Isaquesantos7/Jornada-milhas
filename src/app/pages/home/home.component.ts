import { Component, Input } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { ContainerComponent } from '../../shared/container/container.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CardBuscarComponent } from '../../shared/card-buscar/card-buscar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    ContainerComponent,
    FooterComponent,
    CardBuscarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  protected src: string = '../assets/imagens/banner-homepage.png';
  protected alt: string = 'Banner da Aplicação Jornada';

  /* card-buscar */
  protected img: string = '../../../assets/imagens/Veneza.png';
  protected alt_: string = 'Imagem de veneza.';
  protected titulo: string = 'Veneza';
  protected preco: string = 'R$ 500,00';
}
