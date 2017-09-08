import { Component, Input, OnInit, EventEmitter } from '@angular/core'
import { ToastsManager } from 'ng2-toastr/ng2-toastr'
import { AnimalsService } from './animals.service'


@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {
  @Input() id:number
  review: any = {}
  reviews: any = []

  constructor(private animalsService: AnimalsService, private toastr: ToastsManager) {}

  ngOnInit() {
    this.getReviews()
  }

  getReviews() {
    this.animalsService.getReviews(this.id).subscribe(res => {
      let reviews = res.map(e => {
        return {
          message: e.message.text,
          author: e.user
        }
      })
      this.reviews = reviews
    })
  }

  createReview() {
    this.animalsService.createReview(this.id, this.review).subscribe(res => {
      if(res.success) {
        this.toastr.success(res.message)
        this.getReviews()
        this.review = {}
      } else {
        this.toastr.error(res.message)
       this.getReviews()
      }
    })
  }
}