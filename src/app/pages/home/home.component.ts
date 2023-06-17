import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  images = [
    {src: '/assets/images/nature/1.jpeg', text: 'Jardin tropical de Coco'},
    {src: '/assets/images/nature/2.jpeg', text: 'Petit jardin de Busra'},
    {src: '/assets/images/nature/3.jpeg', text: 'Terrain communautaire de Lucas'}
  ];
}
