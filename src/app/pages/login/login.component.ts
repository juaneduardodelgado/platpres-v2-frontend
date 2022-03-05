import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  loginError: string = '';

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    if(this.email?.value === 'info@platpres.com'
      && this.password?.value === 'platpres') {
        this.loginError = '';
        this.router.navigate(['/app']);
    } else {
      this.loginError = 'Nombre de usuario o contraseña es incorrecto.'
    }
  }

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }
}
