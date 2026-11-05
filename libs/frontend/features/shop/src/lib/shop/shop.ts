import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../layout/header/header';

@Component({
  selector: 'lib-shop',
  imports: [RouterOutlet, Header],
  templateUrl: './shop.html',
  styleUrl: './shop.scss',
  host: { class: 'block min-w-0' },
})
export class Shop {}
