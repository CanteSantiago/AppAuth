import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-Pages',
  templateUrl: './login-Pages.component.html',
  styleUrls: ['./login-Pages.component.css']
})
export class LoginPagesComponent   {

  private fb   = inject( FormBuilder );


  public myForm: FormGroup = this.fb.group({
    email:    ['', [ Validators.required, Validators.email ]],
    password: [' ', [ Validators.required, Validators.minLength(6) ]],
  });

login(){
  console.log(this.myForm.value);

}

}
