import { AuthService } from './../../services/auth.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login-Pages',
  templateUrl: './login-Pages.component.html',
  styleUrls: ['./login-Pages.component.css']
})
export class LoginPagesComponent   {

  private fb   = inject( FormBuilder );
private AuthService = inject(AuthService);
private router      = inject( Router )

  public myForm: FormGroup = this.fb.group({
    email:    ['santi@google.com', [ Validators.required, Validators.email ]],
    password: ['123456', [ Validators.required, Validators.minLength(6) ]],
  });

  login() {
    const { email, password } = this.myForm.value;

    this.AuthService.login(email, password)
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (message) => {
          Swal.fire('Error', message, 'error' )
        }
      })

  }




}


