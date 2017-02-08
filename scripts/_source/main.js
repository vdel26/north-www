import FontFaceObserver from 'fontfaceobserver'
import Picturefill from 'picturefill'

const $ = document.querySelector.bind(document)

class App {
  constructor () {
    this.init()
    this.bindEvents()
  }

  bindEvents () {
    $('.js-desktop-showcase').addEventListener('mouseover', this.desktopShowcase)
  }

  desktopShowcase (evt) {
    console.log(evt.target)
    // filter: target has data-id attr?
    // show description for this one
    // hide all others in the list
  }

  mobileShowcase () {}

  init () {}
}

document.addEventListener('DOMContentLoaded', () => window.app = new App())