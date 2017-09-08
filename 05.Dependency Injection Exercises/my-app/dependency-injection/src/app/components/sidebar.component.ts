import { Component, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'sidebar',
  template: `
    <section class='sidebar'>
      <ul>
        <li>
          <button (click)='getFollowers()'>Followers</button>
        </li>
        <li>
          <button (click)='getRepos()'>Repositories</button>
        </li>
      </ul>
    </section>`,
    styles: [':host {width: 20%; display: inline-block; border: 1px solid black; vertical-align: top;}']
})
export class SidebarComponent {
  @Output() onGetFollowers = new EventEmitter();
  @Output() onGetRepos = new EventEmitter();

  getFollowers () {
    this.onGetFollowers.emit()
  }

  getRepos () {
    this.onGetRepos.emit()
  }
}