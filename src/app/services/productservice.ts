import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Posts {
  id: number;
  userId: number;
  title: string;
  body: string;
}
@Injectable({
  providedIn: 'root',
})
export class Productservice {
  url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient){}

  getPosts(): Observable<Posts[]>{
      return this.http.get<Posts[]>(this.url);
  }

  addPosts(post: Posts): Observable<Posts>{
    return this.http.post<Posts>(this.url, post);
  }



}
