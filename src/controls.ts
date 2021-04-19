export class Controls {
  rightPressed = false
  leftPressed = false
  keyDown
  keyUp

  constructor() {
    this.keyUp = this.keyUpListener.bind(this)
    this.keyDown = this.keyDownListener.bind(this)
  }

  activate(): void {
    window.addEventListener("keyup", this.keyUp, false)
    window.addEventListener("keydown", this.keyDown, false)
  }


  keyDownListener(e): void {
    if(e.keyCode == 68 || e.keyCode == 39) {
      //to the right
      this.rightPressed = true
    }
    if(e.keyCode == 65 || e.keyCode == 37) {
      //to the left
      this.leftPressed = true
    }
  }

  keyUpListener(e): void {
    if(e.keyCode == 68 || e.keyCode == 39) {
      // to the right
      this.rightPressed = false
    }
    if(e.keyCode == 65 || e.keyCode == 37) {
      // to the left
      this.leftPressed = false
    }
  }

}
