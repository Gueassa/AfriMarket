import { Component } from '@angular/core';
import { User } from '../../../models/user';
import { FormControl, FormGroup,FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: false,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  user: User = {

  email: "",
  password: "",
  }

signinForm: FormGroup;
email: FormControl;
password: FormControl;

constructor(private fb: FormBuilder) {
this.email= fb.control("",[Validators.email, Validators.required])
this.password= fb.control("",[Validators.required, Validators.minLength(6)])

this.signinForm = fb.group ({
email: this.email,
password: this.password
})
}


handleSubmit(){
console.log(this.signinForm.valid);
}



}
