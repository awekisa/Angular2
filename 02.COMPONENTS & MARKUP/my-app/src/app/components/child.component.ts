import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'child',
  template: `<h1>Child</h1>
  <div>{{parentInfo}}</div>
  <button (click)='sendToParent()'>Send data to parent</button>
  `
  
})
export class ChildComponent {
  @Input() parentInfo: string
  @Output() onSendDataToParent = new EventEmitter<string>();

  sendToParent () {
    this.onSendDataToParent.emit('Some data from child')
  }
}