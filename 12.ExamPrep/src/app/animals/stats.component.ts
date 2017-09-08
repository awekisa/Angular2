import { Component, OnInit } from '@angular/core'
import { AnimalsService } from './animals.service'

@Component({
  selector: 'stats',
  template: 
  `
    <div>
      <h3>Users: {{stats.users}}</h3>
      <h3>Cars: {{stats.animals}}</h3>
    </div>
  `
})
export class StatsComponent implements OnInit {
  stats: any = {}

  constructor(private animalsService: AnimalsService) {}

  ngOnInit() {
    this.animalsService.getStats().subscribe(res => {
      this.stats = res
    })
  }  

}