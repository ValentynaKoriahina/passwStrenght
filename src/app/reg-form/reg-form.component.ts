import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordFormComponent } from './password-form/password-form.component';
import { PasswordComplexityComponent } from './password-complexity/password-complexity.component';

@Component({
  selector: 'app-reg-form',
  standalone: true,
  imports: [CommonModule, PasswordFormComponent, PasswordComplexityComponent],
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent {
  classWeak!: string;
  classMedium!: string;
  classStrong!: string;

  updateWeakClass(value: string) {
    this.classWeak = value;
  }

  updateMediumClass(value: string) {
    this.classMedium = value;
  }

  updateStrongClass(value: string) {
    this.classStrong = value;
  }
}
