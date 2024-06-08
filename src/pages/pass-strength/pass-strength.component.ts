import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-pass-strength',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pass-strength.component.html',
  styleUrl: './pass-strength.component.scss',
})
export class PassStrengthComponent {
  password: string = '';
  strength: string = '';

  ngOnInit(): void {}

  checkStrength(password: string) {
    this.password = password;
    const strength = this.calculateStrength(password);
    this.strength = strength;
  }

  calculateStrength(password: string): string {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);

    const matches = [hasLetters, hasNumbers, hasSpecial, hasUppercase].filter(
      Boolean
    ).length;

    if (matches === 4) {
      return 'Strong';
    } else if (matches === 3) {
      return 'Medium';
    } else {
      return 'Weak';
    }
  }
}
