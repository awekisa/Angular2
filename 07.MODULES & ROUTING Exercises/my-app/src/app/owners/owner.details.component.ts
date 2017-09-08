import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OwnersService } from './owners.service'

@Component({
  selector: 'owners',
  templateUrl: './owner.details.component.html',
  styleUrls: ['./owner.details.component.css']
})
export class OwnerDetailsComponent {
  id;
  owner;
  constructor (
    private route: ActivatedRoute,
    private ownersService: OwnersService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit () {
    this.ownersService
      .getOwnerById(this.id)
      .then(owner => {
        this.owner = owner
      })
  }

}