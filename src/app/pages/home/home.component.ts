import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  images = [
    {src: '/assets/images/nature/1.jpeg', text: 'Jardin tropical', owner: 'Coco'},
    {src: '/assets/images/nature/2.jpeg', text: 'Moment de détente', owner: 'Busra'},
    {src: '/assets/images/nature/3.jpeg', text: 'Terrain communautaire', owner: 'Lucas'}
  ];
}
