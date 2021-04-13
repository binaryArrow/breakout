import {setInterval} from "timers";

export class Breakout {
  private heading = 'Hello!'
  private canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement
  private context: CanvasRenderingContext2D
  private x: number
  private y: number

  attached() {
    this.context = this.canvas.getContext('2d')
    this.x = this.canvas.width/2
    this.y = this.canvas.height-30
    //block
    setInterval(()=>this.draw(), 10)
  }

  renderPlayer(){
    this.context.beginPath()
    this.context.rect(210, 470, 60, 15)
    this.context.fillStyle = 'rgba(100,174,177,0.77)'
    this.context.fill()
    this.context.strokeStyle = '#000'
    this.context.stroke()
    this.context.closePath()
  }

  renderBall() {
    //ball
    this.context.beginPath()
    this.context.arc(this.x, this.y, 10, 0, Math.PI*2, false)
    this.context.fillStyle = '#bf6666'
    this.context.fill()
    this.context.strokeStyle = '#000'
    this.context.stroke()
    this.context.closePath()
  }

  draw() {
    this.renderBall()
    // ball movement
    this.x += 2
    this.y -= 2
  }

}
