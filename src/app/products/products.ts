import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormatmessagePipe } from '../formatmessage-pipe';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormatmessagePipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  isLoggedIn: boolean = true;
  isActive: boolean = true;
  today :Date = new Date();
  category: string = "Electronics";
  price:number = 0.60;

  role: string = "seller";
  textColor: string = "blue";
  products: string[] = ["TV","shoes","mobile","headphoness"];
  

}
