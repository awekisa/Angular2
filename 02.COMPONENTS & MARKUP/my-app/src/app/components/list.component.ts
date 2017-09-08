import {Component} from '@angular/core';

@Component({
  selector: 'list',
  template: `
  <button (click)='switchList()'>{{buttonTitle}}</button>
  <ul *ngIf='showList'>
  <li *ngFor='let hero of heroes'>
    {{hero}}
  </li>
</ul>
<p>{{1 + 2 + getNumber()}}</p>`
})
export class ListComponent {
  heroes = ['Alexander the Great', 'Napoleon', 'Santa', 'Tornado', 'Toro']
  showList = false;
  buttonTitle = this.showList ? 'Hide' : 'Show'

  switchList () {
    this.showList = !this.showList
    this.buttonTitle = this.showList ? 'Hide' : 'Show'
  }

  getNumber () {
    return 20 / this.heroes.length;
  }
}