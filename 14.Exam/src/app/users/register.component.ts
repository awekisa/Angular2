import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { RegisterUserModel } from './register-user.model'
import { UserService } from './user.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr'

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent { 
  user = new RegisterUserModel()

  constructor(private userService: UserService, private toastr: ToastsManager, private router: Router) { }

  register() {
    this.userService.register(this.user).subscribe((res) => {

      if(res.success) {
        this.router.navigateByUrl('users/login')
        this.toastr.success(res.message)
      } else {
        // let firstError = Object.keys(res.errors)[0]
        // this.toastr.error(res.errors[firstError])
        this.toastr.error(res.message)
      }
    })
  }
}