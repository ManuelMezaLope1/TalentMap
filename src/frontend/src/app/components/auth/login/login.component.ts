import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  showPassword = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';

      const { email, password, rememberMe } = this.loginForm.value;

      setTimeout(() => {
        const user = {
          id: Date.now().toString(),
          email: email,
          name: email.split('@')[0]
        };

        if (rememberMe) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        } else {
          sessionStorage.setItem('currentUser', JSON.stringify(user));
        }

        this.isLoading = false;
        this.router.navigate(['/']).then(() => {
          window.location.reload();
        });
      }, 800);
    }
  }

    togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
