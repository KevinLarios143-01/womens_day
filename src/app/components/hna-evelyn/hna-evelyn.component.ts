import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hna-evelyn',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hna-evelyn.component.html',
  styleUrl: './hna-evelyn.component.css'
})
export class HnaEvelynComponent {
  photos = [
    '/Fotitas/Hna Evelyn/20251129_200718.jpg',
    '/Fotitas/Hna Evelyn/WhatsApp Image 2026-03-08 at 17.37.18.jpeg'
  ];
}
