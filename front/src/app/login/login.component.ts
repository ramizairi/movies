import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'], 
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  onLogin() {
    const credentials = { username: this.username, password: this.password };
    this.http.post('http://localhost:5000/login', credentials).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']); // Redirect to dashboard or any other route
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
}