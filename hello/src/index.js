class Hello {
  constructor(text) {
    this.text = text
  }

  init() {
    window.console.log('text ---->', this.text)
  }
}

window.Hello = Hello