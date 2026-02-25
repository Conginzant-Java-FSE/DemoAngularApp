import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


type User = {
   name:string,
    email:string,
    password:string,
    age:number,
    gender:string;
}
@Component({
  selector: 'app-formcomponent',
  imports: [CommonModule, FormsModule],
  templateUrl: './formcomponent.html',
  styleUrl: './formcomponent.css',
})
export class Formcomponent {

  user:User = {
    name:"",
    email:"",
    password:"",
    age:0,
    gender:""
  }

  onSubmit(form: any){
      console.log("members:", this.user);
      console.log("form:",form.form.value);
  }

}
