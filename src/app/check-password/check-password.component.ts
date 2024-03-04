import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-check-password',
  templateUrl: './check-password.component.html',
  styleUrls: ['./check-password.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class CheckPasswordComponent {
  password: string = '';

  logPassword(value: string) {
    console.log(value.split(''));
  }

  ngDoCheck() {
    var regExS = /^(?=.*[a-zA-Zа-яА-Я])(?=.*\d)(?=.*[\p{P}\p{S}]).+$/u;
    var regExM = /^(?=.*[a-zA-Zа-яА-Я])(?=.*\d)|(?=.*[a-zA-Zа-яА-Я])(?=.*[\p{P}\p{S}])|(?=.*\d)(?=.*[\p{P}\p{S}])[a-zA-Zа-яА-Я\d\p{P}\p{S}]+$/u;

    console.log(this.password);

    if (this.password.length < 8) {

      console.log("Пароль не соответствует требованиям  безопасности.");

    } else {


      if (regExS.test(this.password)) {

        console.log("Пароль является сильным.");

      } else if (regExM.test(this.password)) {

        console.log("Пароль является средним.");

      } else {

        console.log("Пароль является ленким.");

      }
    }
  }
}
