import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  anthStatus: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.anthStatus = this.authService.isAuth;
  }

  connecter() {
    this.authService.signIn().then(
      () => {
        this.anthStatus = this.authService.isAuth;
        this.router.navigate(['appareil']);
      }
    );
  }
  deconnecter() {
    this.authService.signOut();
    this.anthStatus = this.authService.isAuth;
  }

}
