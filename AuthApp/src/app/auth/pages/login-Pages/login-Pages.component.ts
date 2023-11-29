import { AuthService } from './../../services/auth.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-Pages',
  templateUrl: './login-Pages.component.html',
  styleUrls: ['./login-Pages.component.css']
})
export class LoginPagesComponent   {

  private fb   = inject( FormBuilder );
private AuthService = inject(AuthService);

  public myForm: FormGroup = this.fb.group({
    email:    ['', [ Validators.required, Validators.email ]],
    password: [' ', [ Validators.required, Validators.minLength(6) ]],
  });

login(){
const{email, password}= this.myForm.value;

this.AuthService.login(email, password)
.subscribe(success=>{
  console.log(success);

})

}

}
