import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-zoe',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './zoe.component.html',
  styleUrl: './zoe.component.css'
})
export class ZoeComponent {
  photos = [
    '/Fotitas/Zoe/20251011_182246.jpg',
    '/Fotitas/Zoe/20251018_201420.jpg',
    '/Fotitas/Zoe/20251204_185107.jpg',
    '/Fotitas/Zoe/20251220_094149.jpg',
    '/Fotitas/Zoe/IMG-20251011-WA0022.jpg'
  ];
}
