import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-evelyn',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './evelyn.component.html',
  styleUrl: './evelyn.component.css'
})
export class EvelynComponent {
  photos = [
    '/Fotitas/Evelyn/20251018_201420.jpg',
    '/Fotitas/Evelyn/20251129_164842(0).jpg',
    '/Fotitas/Evelyn/20251204_185107.jpg',
    '/Fotitas/Evelyn/20260117_145444.jpg',
    '/Fotitas/Evelyn/20260201_175326.jpg',
    '/Fotitas/Evelyn/20260201_175328.jpg',
    '/Fotitas/Evelyn/IMG-20251011-WA0022.jpg'
  ];
}
