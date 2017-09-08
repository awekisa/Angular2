import { Component, OnInit } from '@angular/core'
import { UserService } from './user.service'
import { AnimalModel } from '../animals/animals.model'
import { ToastsManager } from 'ng2-toastr/ng2-toastr'

@Component({
  selector: 'profile',
  templateUrl: './profie.component.html'
})
export class ProfileComponent implements OnInit {

  myAnimals: AnimalModel[]

  constructor(private userService: UserService, private toastr: ToastsManager) {}

  ngOnInit() {
    this.getAnimals()
  }

  getAnimals() {
    this.userService.getMyAnimals().subscribe(res => {
      this.myAnimals = res as AnimalModel[]
    })
  }

  deleteAnimal(id) {
    this.userService.deleteAnimal(id).subscribe(res => {
      if (res.success) {
        this.toastr.success(res.message)
        this.getAnimals()
      } else {
        this.toastr.info(res.message)
      }
    })
  }

}