import { CommonModule } from '@angular/common';
import { SharedModule } from '../sharedModule/SharedModule';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../guards/auth-service.service';
import { ProductsService } from '../../Services/isLogged.service';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ProductsService],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @ViewChild('f') loginForm: NgForm | undefined;

  username: string = '';
  pass: string = '';

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private prodServ: ProductsService
  ) {}

  onSubmit() {
    if (this.loginForm) {
      this.username = this.loginForm.value.username;
      this.pass = this.loginForm.value.pass;
      localStorage.setItem('username', this.username);
      localStorage.setItem('password', this.pass);
      this.onLogin();
    }
  }

  pass1: string | undefined;
  pass2: string | undefined;
  passwordMatch: boolean = false;

  onPassBlur() {
    if (this.pass1 === this.pass2 && this.pass1 && this.pass2) {
      this.passwordMatch = true;
    } else {
      this.passwordMatch = false;
    }
  }

  onLogin() {
    this.authService.login();
    this.router.navigate(['/']);

    this.prodServ.setisLoggedStatus(true);
  }

  showPopup: boolean = false;

  onLogout() {
    this.authService.logout();
    this.showPopup = true;
    setTimeout(() => {
      this.showPopup = false;
    }, 1000);
  }
  password: string = '';
  strength: string = '';

  checkStrength(password: string) {
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(
      password
    );

    const totalChars = password.length;
    let strength = '';

    if (
      totalChars >= 8 &&
      hasLowerCase &&
      hasUpperCase &&
      hasNumbers &&
      hasSpecialChars
    ) {
      strength =
        'Strong  contains characters and Numbers and Capital letters and special characters';
    } else if (
      totalChars >= 6 &&
      ((hasLowerCase && hasUpperCase) ||
        (hasLowerCase && hasNumbers) ||
        (hasLowerCase && hasSpecialChars) ||
        (hasUpperCase && hasNumbers) ||
        (hasUpperCase && hasSpecialChars) ||
        (hasNumbers && hasSpecialChars))
    ) {
      strength =
        'Medium contains max 3 of the following characters, numbers, Capital letters and special characters';
    } else {
      strength =
        'Weak contains max 2 of the following characters, numbers, Capital letters and special characters';
    }

    this.strength = strength;
  }
}
