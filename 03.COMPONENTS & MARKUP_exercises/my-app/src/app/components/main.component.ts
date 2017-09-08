import { Component, Input, OnInit, OnDestroy, OnChanges } from '@angular/core'

@Component({
  selector: 'main',
  templateUrl: './main.html',
  styles: [':host {width: 60%; display: inline-block; border: 1px solid black; vertical-align: top;}']
})
export class MainComponent {
  @Input() title: string
  @Input() author: string
  @Input() image: string
  @Input() description: string
  shortDescription = ''
  descriptionIndex = 0
  disabled = false
  buttonShow = true
  imageButton = this.buttonShow ? 'Hide' : 'Show'
  fontSize = 16
  incFontSizeBtn = true
  decFontSizeBtn = true
  colorValue = ''
  backgroundColorValue = ''

  incFontSize () {
    if (this.fontSize < 32) {
      this.fontSize = this.fontSize + 1
      if (this.fontSize > 14) {
        this.decFontSizeBtn = true
      }
    } else {
      this.incFontSizeBtn = false
    }
  }
  decFontSize () {
    if (this.fontSize > 14) {
      this.fontSize = this.fontSize - 1
        if (this.fontSize < 32) {
        this.incFontSizeBtn = true
      }     
    } else {
      this.decFontSizeBtn = false
    }
  }
  getFontSize () {
    return this.fontSize + 'px'
  }

  ngOnChanges () {
    this.descriptionIndex = 0
    this.show250()
    this.disabled = false
  }

  toggleImage () {
    this.buttonShow = !this.buttonShow
    this.imageButton = this.buttonShow ? 'Hide' : 'Show'
  }

  show250 () {
    let index = this.descriptionIndex + 250
    let description = this.description ? this.description.substring(0, index) : ''
    this.descriptionIndex = this.descriptionIndex + 250
    this.disabled = (description.length >= this.descriptionIndex) ? false : true
    this.shortDescription = description
  }

  onColorChange (colorValue) {
    this.colorValue = colorValue
  }

  onBackgroundColorChange (backgroundColorValue) {
    this.backgroundColorValue = backgroundColorValue
  }
}