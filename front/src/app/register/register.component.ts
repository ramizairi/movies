import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
    standalone: true,
    imports: [
      CommonModule,
      FormsModule
    ]
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onRegister() {
    const credentials = { username: this.username, password: this.password };
    this.http.post('http://localhost:5000/register', credentials).subscribe(
      (response: any) => {
        this.router.navigate(['/login']); // Redirect to login page after successful registration
      },
      (error) => {
        this.errorMessage = 'Registration failed. Please try again.';
      }
    );
  }
}