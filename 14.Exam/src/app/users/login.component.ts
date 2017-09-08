import { Component, ViewContainerRef, NgZone } from '@angular/core'
import { Router } from '@angular/router'
import { LoginUserModel } from './login-user.model'
import { UserService } from './user.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr'

import { AuthService } from '../core/auth.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user = new LoginUserModel()

  constructor(
    private userService: UserService,
    private toastr: ToastsManager,
    private router: Router,
    private authService: AuthService) {}

  login() {
    this.userService.login(this.user).subscribe((res) => {
      if(res.success) {
        this.authService.authenticateUser(res.token)
        this.authService.saveUser(res.user.name)
        this.toastr.success(res.message)
        // this.router.navigateByUrl('/cars/all')
      } else {
        this.toastr.error(res.message)
      }
    })
  }
}