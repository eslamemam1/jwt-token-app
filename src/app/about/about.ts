import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  http = inject(HttpClient);
  users: any[] = [];
  isLoading = true;
  ngOnInit(): void {
    this.isLoading = true;
    this.http.get('/api/User/GetAllUsers').subscribe(
      (res: any) => {
        this.users = res.data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error:', error);
        this.isLoading = false;
      }
    );
  }
}
