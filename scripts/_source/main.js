import FontFaceObserver from 'fontfaceobserver'
import Picturefill from 'picturefill'

const $ = document.querySelector.bind(document)

class App {
  constructor () {
    this.init()
    this.bindEvents()
  }

  bindEvents () {
    $('.js-desktop-showcase').addEventListener('mouseover', this.desktopShowcaseSet)
    $('.js-desktop-showcase').addEventListener('mouseleave', this.desktopShowcaseLeave)
  }

  desktopShowcaseSet (evt) {
    // set to project image
    console.log('over', evt.target.dataset.id)
    const projectId = evt.target.dataset.id
    const item = $(`.showcase__item[data-id=${projectId}]`)
    if (item) {
      item.classList.add('is-active')
    }
  }

  desktopShowcaseLeave (evt) {
    // set to black background
    console.log('leave', evt.target)
    const items = document.querySelectorAll('.showcase__item')
    Array.from(items).map((item) => {
      if (item.classList.contains('is-active')) {
        item.classList.remove('is-active')
      }
    })
  }

  mobileShowcase () {
    // rotate through projects list in 3s intervals
  }

  init () {}
}

document.addEventListener('DOMContentLoaded', () => window.app = new App())