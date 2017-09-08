import { Component, Input, Output, EventEmitter } from '@angular/core'
import { AnimalsService } from './animals.service'

@Component({
  selector: 'search-bar',
  template: 
  `
    <input type='text' [(ngModel)]='searchValue' />
    <button class='btn btn-default' (click)='search()' >Search</button>
  `
})
export class SearchComponent {
  @Input() page
  @Output() queryAnimals = new EventEmitter<any>()
  searchValue = ''

  constructor(private animalsService: AnimalsService) {}

  search() {
    this.animalsService.getAnimals(this.page, this.searchValue).subscribe(res => {
      this.queryAnimals.emit(res)
    })

  }
}