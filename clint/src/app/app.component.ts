import { Component } from '@angular/core';
import { TokenStorageService } from './shared/auth/token-storage.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[];
  private authority: string;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        }
        //  else if (role === 'ROLE_EMPLOYEE') {
        //   this.authority = 'employee';
        //   return false;
        // }
        // this.authority = 'customer';
        // return true;
      });
    }
  }
  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}