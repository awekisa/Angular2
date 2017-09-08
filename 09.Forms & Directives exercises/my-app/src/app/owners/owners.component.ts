import { Component, OnInit } from '@angular/core';

import { OwnersService } from './owners.service'

@Component({
  selector: 'owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent {
  owners;
  sortedByNameAsc;

  constructor (private ownersService: OwnersService) {
  }

  ngOnInit () {
    this.ownersService
      .getOwners()
      .then(owners => {
        this.owners = owners
      })
  }

  sortByName () {
    this.ownersService
      .getOwners()
      .then(owners => {
        let arr = [];
        for (let key in owners) {
          arr.push(owners[key]);
        }
        if (this.sortedByNameAsc) {
          arr.sort((e1, e2) => {
            return e1.name.localeCompare(e2.name)
          })
          this.sortedByNameAsc = !this.sortedByNameAsc
          this.owners = arr
        } else {
          arr.sort((e1, e2) => {
            return e2.name.localeCompare(e1.name)
          })
          this.sortedByNameAsc = !this.sortedByNameAsc
          this.owners = arr
        }
      })
  }
}