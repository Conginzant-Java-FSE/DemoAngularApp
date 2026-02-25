import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { RouterOutlet } from '@angular/router';
import { Observablecomponent } from '../components/observablecomponent/observablecomponent';

@Component({
  selector: 'app-home',
  imports: [Header, Footer, RouterOutlet, Observablecomponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  info: string = "TS";


  receiveData(data: string){
    console.log(data);
  }
}
