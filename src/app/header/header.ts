import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
    @Input() message!:string;

    @Output() notify = new EventEmitter<string>();

    sendData(){
      this.notify.emit("hello all");
    }
}
