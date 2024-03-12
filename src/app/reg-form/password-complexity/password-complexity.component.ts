import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-complexity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-complexity.component.html',
  styleUrls: ['./password-complexity.component.css']
})
export class PasswordComplexityComponent {
  @Input() classWeak: string = 'undefined-pass';
  @Input() classMedium: string = 'undefined-pass';
  @Input() classStrong: string = 'undefined-pass';
}
