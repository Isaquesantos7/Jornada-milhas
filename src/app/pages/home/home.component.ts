import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { ContainerComponent } from '../../shared/container/container.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CardBuscarComponent } from '../../shared/card-buscar/card-buscar.component';
import { CardDepoimentoComponent } from '../../shared/card-depoimento/card-depoimento.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    ContainerComponent,
    FooterComponent,
    CardBuscarComponent,
    CardDepoimentoComponent,
    NgStyle
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

  /* card-depoimento */
  protected avatar: string = '../../assets/imagens/avatar3.png';
  protected altAvatar: string = 'Imagem do avatar do usuário que postou o depoimento.'
  protected depoiomento: string = `
    Recomendo fortemente a agência de viagens Jornada.
    Eles oferecem um serviço personalizado e de alta qualidade
    que excedeu minhas expectativas em minha última viagem.
  `;
  protected autoria: string = 'Maria cecilia';
  protected src_depoimento: string = '../assets/imagens/banner-homepage-rodape.png';
  protected alt_depoimento: string = 'Imagem do banner do rodapé';
}
