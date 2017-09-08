import { Component, Input, OnInit, EventEmitter } from '@angular/core'
import { ToastsManager } from 'ng2-toastr/ng2-toastr'
import { CarsService } from './cars.service'


@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {
  @Input() id:number
  ratings = [1, 2, 3, 4, 5]
  review: any = {}
  reviews: any = []

  constructor(private carsService: CarsService, private toastr: ToastsManager) {}

  ngOnInit() {
    this.getReviews()
  }

  getReviews() {
    this.carsService.getReviews(this.id).subscribe(res => {
      this.reviews = res
      console.log(res)
    })
  }

  createReview() {
    this.carsService.createReview(this.id, this.review).subscribe(res => {
      if(res.success) {
        this.toastr.success(res.message)
        this.getReviews()
      } else {
        this.toastr.error(res.message)
       this.getReviews()
      }
    })
  }
}