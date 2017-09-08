import { Component, OnInit } from '@angular/core'
import { UserService } from './user.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr'

@Component({
  selector: 'profile',
  templateUrl: './profie.component.html'
})
export class ProfileComponent {

  constructor(private userService: UserService, private toastr: ToastsManager) {}
}