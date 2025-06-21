import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  obj: any = {
    EmailId: '',
    Password: '',
  };
  http = inject(HttpClient);
  router = inject(Router);
  onSubmit() {
    //debugger;
    this.http.post('/api/User/Login', this.obj).subscribe((res: any) => {
      //console.log(res);
      if (res.result) {
        //alert('login sec');
        this.router.navigate(['/dashboard']);
        localStorage.setItem('token', res.data.token);
        console.log('token is saved');
      } else {
        alert(res.message);
      }
    });
  }
}
