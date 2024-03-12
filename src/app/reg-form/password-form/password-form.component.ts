import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordService } from '../../services/password.service';

@Component({
  selector: 'app-password-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css'],
})

export class PasswordFormComponent {
  password: string = '';

  @Output() classWeak = new EventEmitter<string>();
  @Output() classMedium = new EventEmitter<string>();
  @Output() classStrong = new EventEmitter<string>();

  constructor(private ps: PasswordService) {}

  checkPassword() {
    const { weak, medium, strong } = this.ps.checkStrength(this.password);
    this.classWeak.emit(weak);
    this.classMedium.emit(medium);
    this.classStrong.emit(strong);
  };
}
