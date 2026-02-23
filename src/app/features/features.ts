import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


type regForm = {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-features',
  imports: [FormsModule],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
  title: string = "Welcome to our ecomm app!";
  subtitle: string = "10 mins edelivery"
  count:number = 0;

  regData: regForm = {
  username: "",
  email: "",
  password: "",
  }


  constructor(private route: ActivatedRoute){

  }

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get("id");
    console.log(id);
  }

  alertMessage() {
    alert("DONT CLICK");
  }

  increment(){
    this.count += 1;
  }

  submit(){
    console.log(this.regData.username + this.regData.email);
  }


}
