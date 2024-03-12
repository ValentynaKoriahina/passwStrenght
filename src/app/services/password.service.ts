import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  regExStrong = /^(?=.*[a-zA-Zа-яА-Я])(?=.*\d)(?=.*[\p{P}\p{S}]).+$/u;
  regExMedium = /^(?=.*[a-zA-Zа-яА-Я])(?=.*\d)|(?=.*[a-zA-Zа-яА-Я])(?=.*[\p{P}\p{S}])|(?=.*\d)(?=.*[\p{P}\p{S}])[a-zA-Zа-яА-Я\d\p{P}\p{S}]+$/u;

  constructor() { }

  checkStrength(password: string) {
    let weak = 'undefined-pass';
    let medium = 'undefined-pass';
    let strong = 'undefined-pass';
    
    if (password.length === 0) {
      weak = 'undefined-pass';
      medium = 'undefined-pass';
      strong = 'undefined-pass';
      // console.log('no password entered');

    } else if (password.length < 8) {
      weak = 'weak-pass';
      medium = 'weak-pass';
      strong = 'weak-pass';
      // console.log('invalid password');

    } else {
      if (this.regExStrong.test(password)) {
        weak = 'strong-pass';
        medium = 'strong-pass';
        strong = 'strong-pass';
        // console.log('strong password');

      } else if (this.regExMedium.test(password)) {
        weak = 'medium-pass';
        medium = 'medium-pass';
        strong = 'undefined-pass';
        // console.log('medium password');

      } else {
        weak = 'weak-pass';
        medium = 'undefined-pass';
        strong = 'undefined-pass';
        // console.log('weak password');
      }
    }

    return { weak, medium, strong };
  }
}
