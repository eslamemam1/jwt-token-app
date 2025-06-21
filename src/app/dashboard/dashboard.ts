import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  router = inject(Router);
  http = inject(HttpClient);
  users: any[] = [];
  ngOnInit(): void {
    this.http.get('api/User/GetAllUsers').subscribe((req: any) => {
      this.users = req.data;
    });
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
