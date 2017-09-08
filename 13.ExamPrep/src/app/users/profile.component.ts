import { Component, OnInit } from '@angular/core'
import { UserService } from './user.service'
import { CarModel } from '../cars/car.model'
import { ToastsManager } from 'ng2-toastr/ng2-toastr'

@Component({
  selector: 'profile',
  templateUrl: './profie.component.html'
})
export class ProfileComponent implements OnInit {

  myCars: CarModel[]

  constructor(private userService: UserService, private toastr: ToastsManager) {}

  ngOnInit() {
    this.getCars()
  }

  getCars() {
    this.userService.getMyCars().subscribe(res => {
      this.myCars = res as CarModel[]
    })
  }

  deleteCar(id) {
    this.userService.deleteCar(id).subscribe(res => {
      if (res.success) {
        this.toastr.success(res.message)
        this.getCars()
      } else {
        this.toastr.info(res.message)
      }
    })
  }

}