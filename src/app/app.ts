import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { FormsModule } from '@angular/forms';
import { ThemeService } from './services/theme-service';

@Component({
  selector: 'app-root',
  imports: [ Home, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('emomm-app');

  constructor(public service: ThemeService){}

  ngOnInit(){
    localStorage.setItem("token", "qwe123");
  }
}
