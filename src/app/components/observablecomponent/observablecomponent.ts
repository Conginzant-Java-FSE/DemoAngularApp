import { Component } from '@angular/core';
import { filter, from, interval, map, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-observablecomponent',
  imports: [],
  templateUrl: './observablecomponent.html',
  styleUrl: './observablecomponent.css',
})
export class Observablecomponent {


  info:string = "";

  observable_data = new Observable<string>(
    observer => {
      observer.next("Angular");
      observer.next("typescript");
      observer.next("springboot");
      observer.complete();
    }
  )

  sub = new Subject<number>();


  ngOnInit(){
    this.sub.next(10);
    // interval(1000).subscribe(console.log);
    this.observable_data.subscribe(
      data => {
      console.log(data);
      this.info = data;
    }   
    );

    of(1,2,3,4,5,6).pipe(
      filter(x => x % 2 == 1)
    ).pipe(map(x => x * x))
    .subscribe(data => {
      console.log(data);
    });

    from([1,2,3,4,5]).subscribe(console.log)

    this.sub.next(200);

    this.sub.subscribe(console.log);


  }


}
