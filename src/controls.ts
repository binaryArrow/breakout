export class Controls {
  rightPressed = false
  leftPressed = false
  keyDown = document.addEventListener("keydown", this.keyDownListener, false)
  keyUp = document.addEventListener("keyup", this.keyUpListener, false)


  keyDownListener(e): void {
    if(e.keyCode == 68 || e.keyCode == 39) {
      console.log("to the riiigghhhht!")
      this.rightPressed = true
    }
    if(e.keyCode == 65 || e.keyCode == 37) {
      console.log("to the leeeeeft!")
      this.leftPressed = true
    }
  }

  keyUpListener(e): void {
    if(e.keyCode == 68 || e.keyCode == 39) {
      console.log("to the riiigghhhht!")
      this.rightPressed = false
    }
    if(e.keyCode == 65 || e.keyCode == 37) {
      console.log("to the leeeeeft!")
      this.leftPressed = false
    }
  }

}
