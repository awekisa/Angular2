import { Component, Output, EventEmitter } from '@angular/core'
import data from './data'

@Component({
  selector: 'sidebar',
  template: `
    <ul>
      <li *ngFor='let article of articles'>
        <button (click)='sendArticle(article.id)'>{{article.title}}</button>
      </li>
    </ul>`,
  styles: [':host {width: 30%; display: inline-block; border: 1px solid black; vertical-align: top;}']
})
export class SidebarComponent {
  @Output() onSendArticle = new EventEmitter<object>()

  articles = data.getArticles()

  sendArticle (id) {
    let article = data.getById(id)
    this.onSendArticle.emit(article)
  }
}