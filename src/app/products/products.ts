import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormatmessagePipe } from '../formatmessage-pipe';
import { Logger } from '../logger';
import { Posts, Productservice } from '../services/productservice';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormatmessagePipe],
  templateUrl: './products.html',
  standalone: true,
  // template: `<h2>products</h2>
  //   <div *ngFor="let p of products"> {{ p.title }} </div>
  // `,
  styleUrl: './products.css',
})
export class Products implements OnInit {
  isLoggedIn: boolean = true;
  isActive: boolean = true;
  today :Date = new Date();
  category: string = "Electronics";
  price:number = 0.60;

  role: string = "seller";
  textColor: string = "blue";
  products: string[] = ["TV","shoes","mobile","headphoness"];

  posts: Posts[] = [];

  postRes: any = {};

  constructor(private logger: Logger, private service: Productservice, private cdr: ChangeDetectorRef){}

  ngOnInit(){
    this.logger.log("Hello all");
    this.service.getPosts().subscribe({
      next: (data) => {
        console.log("DATA:", data);
        this.posts = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error("Failed to fetch posts:", err);
      }
    });

  }

    createPost(){
      this.service.addPosts({
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
      ).subscribe(
        (data) => {
        console.log("DATA:", data);
        this.postRes = data;
        this.cdr.detectChanges();
      }
      )
    }
  

}
