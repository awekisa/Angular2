import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

import { AnimalsService } from './animals.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr'

@Component({
  selector: 'likes',
  template: 
  `
    <select [(ngModel)]='type' id='type' name='type'>
      <option value='like' selected>Like</option>
      <option value='love'>Love</option>
      <option value='haha'>Haha</option>
      <option value='wow'>Wow</option>
      <option value='sad'>Sad</option>
      <option value='angry'>Angry</option>
    </select>
    <button (click)='reactToAnimal()'>React</button>
  `
})
export class LikesComponent {
  @Input() id: number
  @Output() likeState = new EventEmitter<boolean>()
  type = 'like';

  constructor(private animalsService: AnimalsService, private toastr: ToastsManager) {}

  reactToAnimal() {
    this.animalsService.reactToAnimal(this.id, this.type).subscribe(res => {
      if(res.success) {
        console.log(res)
        this.toastr.success(res.message)
        this.likeState.emit(true)
      } else {
        this.toastr.info(res.message)
        this.likeState.emit(false)
      }
    })
  }
}