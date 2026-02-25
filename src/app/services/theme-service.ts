import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private themeSubject = new BehaviorSubject<string>("light");
  theme$ = this.themeSubject.asObservable();

  toggleTheme(){
    if(this.themeSubject.value == "light"){
      this.themeSubject.next("dark");
    }else{
      this.themeSubject.next("light");
    }
  }
  
}
