import { CommonModule } from '@angular/common';
import { Component, Type } from '@angular/core';



type Message = {
  "data":string;
  "location":string;
  "severity":number;
}

type Category = {
  "id": number;
  "c_name": string;
  "count": number;
}

@Component({
  selector: 'app-display',
  imports: [CommonModule],
  templateUrl: './display.html',
  styleUrl: './display.css',
})
export class Display {
  imageUrl: string = "https://tse3.mm.bing.net/th/id/OIP.TtYyLZNAF7BKGLtwsreD5QHaEK?cb=defcache2&defcache=1&rs=1&pid=ImgDetMain&o=7&rm=3";
  features: Message = {
    data: "Hello everyone",
    location:"CBE",
    severity:10
  };
  users:string[] = ["arul", "guru", "jack"];
  categories: Category[] = [
    {id:1, c_name:"Electronics", count: 40000 },
    {id:2, c_name:"Sports", count: 4000},
    {id:3, c_name:"Laptops", count: 10000}
  ];
}
