import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

import { CarsService } from './cars.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr'

@Component({
  selector: 'likes',
  template: 
  `
    <button (click)='likeCar()'>Like!</button>
  `
})
export class LikesComponent {
  @Input() id: number
  @Output() likeState = new EventEmitter<boolean>()

  constructor(private carsService: CarsService, private toastr: ToastsManager) {}

  likeCar() {
    this.carsService.likeCar(this.id).subscribe(res => {
      if(res.success) {
        this.toastr.success(res.message)
        this.likeState.emit(true)
      } else {
        this.toastr.info(res.message)
        this.likeState.emit(false)
      }
    })
  }
}