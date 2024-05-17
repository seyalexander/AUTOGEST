import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/infraestrcuture/driven-adapter/login/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-lista-login-pages',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista-login-pages.component.html',
  styleUrls: ['./lista-login-pages.component.css']
})
export class ListaLoginPagesComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
  private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      data => {
        console.log('Login successful', data);
        this.router.navigate([`dashboard`]);
      },
      error => {
        console.error('Login failed', error);
        this.errorMessage = 'Invalid username or password';
      }
    );
  }
}
