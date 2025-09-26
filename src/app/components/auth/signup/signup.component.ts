import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

user: User ={
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  passwordConfirm:"",
  _id: ''
}

constructor(){

}

ngOnInit():void{

}

handleSubmit(){
  console.log("User:",this.user);
}

}
