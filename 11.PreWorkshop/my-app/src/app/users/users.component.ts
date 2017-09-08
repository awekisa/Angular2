import { Component } from '@angular/core';
import { User } from '../users/user';

@Component({
  selector: 'user-reg',
  templateUrl: './user-reg-form.html'
})
export class UserRegisterComponent {
  user: User;

  constructor () {
    this.clearUser();
  }

  clearUser () {
    this.user = new User('', '', '')
  }

  registerUser () {
    console.log(this.user)
  }
}