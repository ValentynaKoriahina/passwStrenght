import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-check-password',
  templateUrl: './check-password.component.html',
  styleUrls: ['./check-password.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class CheckPasswordComponent {
  password: string = '';
  classWeak: string = 'undefined-pass';
  classMedium: string = 'undefined-pass';
  classStrong: string = 'undefined-pass';


  ngDoCheck() {
    var regExStrong = /^(?=.*[a-zA-Zа-яА-Я])(?=.*\d)(?=.*[\p{P}\p{S}]).+$/u;
    var regExMedium = /^(?=.*[a-zA-Zа-яА-Я])(?=.*\d)|(?=.*[a-zA-Zа-яА-Я])(?=.*[\p{P}\p{S}])|(?=.*\d)(?=.*[\p{P}\p{S}])[a-zA-Zа-яА-Я\d\p{P}\p{S}]+$/u;

    console.log(this.password);

    if (this.password.length === 0) {

      this.classWeak = 'undefined-pass';
      this.classMedium = 'undefined-pass';
      this.classStrong = 'undefined-pass';


      console.log("Пароль не введен.");

    } else if (this.password.length < 8) {
        this.classWeak = 'weak-pass';
        this.classMedium = 'weak-pass';
        this.classStrong = 'weak-pass';

        console.log("Пароль не соответствует требованиям  безопасности.");

    } else {


      if (regExStrong.test(this.password)) {
        this.classWeak = 'strong-pass';
        this.classMedium = 'strong-pass';
        this.classStrong = 'strong-pass';

        console.log("Пароль является сильным.");

      } else if (regExMedium.test(this.password)) {
        this.classWeak = 'medium-pass';
        this.classMedium = 'medium-pass';
        this.classStrong = 'undefined-pass';

        console.log("Пароль является средним.");

      } else {
        this.classWeak = 'weak-pass';
        this.classMedium = 'undefined-pass';
        this.classStrong = 'undefined-pass';
        console.log("Пароль является легким.");

      }
    }
  }
}
