import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'test',
  template: '<h1>Test of {{id}}</h1>'
})
export class TestComponent {
  id: string
  constructor (private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}