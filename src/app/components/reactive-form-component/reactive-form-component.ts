import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Formcomponent } from '../formcomponent/formcomponent';


@Component({
  selector: 'app-reactive-form-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form-component.html',
  styleUrl: './reactive-form-component.css',
})
export class ReactiveFormComponent {

  userForm: any;
  constructor(private fb: FormBuilder){
    this.userForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })
  } 

  

  onSubmit(){
    console.log(this.userForm.value)
  }


}
