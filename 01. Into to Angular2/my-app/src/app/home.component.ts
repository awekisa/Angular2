import {Component} from '@angular/core'

@Component({
  selector: 'home',
  template: `
    <div>
      <h1 class='pesho'>{{message}}</h1>
    </div>
  `,
  styles: [
    `.pesho {color: red;}`
  ]
})
export class HomeComponent {
  message: string
  constructor () {
    this.message = 'Zdr ko pr'
  }
}