import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Display } from '../display/display';
import { Features } from '../features/features';
import { Footer } from '../footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Header, Display, Features, Footer, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
