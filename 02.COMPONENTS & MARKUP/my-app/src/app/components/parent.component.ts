import {Component} from '@angular/core';

@Component({
  selector: 'parent',
  template: `<h1>Parent</h1>
  <child [parentInfo]='info' (onSendDataToParent)='dataRecieved($event)'></child>`
  
})
export class ParentComponent {
  info = 'Parent information'
  dataRecieved(data) {
    alert(data)
  }
}