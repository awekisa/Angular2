import { Component, OnInit } from '@angular/core'
import { CarsService } from './cars.service'

@Component({
  selector: 'stats',
  template: 
  `
    <div>
      <h3>Users: {{stats.users}}</h3>
      <h3>Cars: {{stats.cars}}</h3>
    </div>
  `
})
export class StatsComponent implements OnInit {
  stats: any = {}

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.carsService.getStats().subscribe(res => {
      this.stats = res
    })
  }  

}