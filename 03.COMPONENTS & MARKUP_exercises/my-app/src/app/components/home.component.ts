import { Component } from '@angular/core'

@Component({
  selector: 'home',
  template: `
    <sidebar (onSendArticle)=articleRecieved($event)></sidebar>
    <main *ngIf='image' [title]=title [author]='author' [image]='image' [description]='description'><main>`
})
export class HomeComponent {
  title = '';
  author = '';
  image = '';
  description = '';

  articleRecieved (data) {
    this.title = data.title
    this.author = data.author
    this.image = data.image
    this.description = data.description
  }
}