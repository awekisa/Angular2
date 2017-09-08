import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CarsService } from './cars.service'

@Component({
  selector: 'search-bar',
  template: 
  `
    <input type='text' [(ngModel)]='searchValue' />
    <button class='btn btn-default' (click)='search()' >Search</button>
  `
})
export class SearchComponent {
  @Input() page;
  @Output() queryCars = new EventEmitter<any>();
  searchValue = '';

  constructor(private carsService: CarsService) {}

  search() {
    this.carsService.getCars(this.page, this.searchValue).subscribe(res => {
      this.queryCars.emit(res)
    })

  }
}