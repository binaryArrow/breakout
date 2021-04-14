import {setInterval} from "timers";
import {Coordinates} from "./coordinates";

export class Breakout {
  private heading = 'Hello!'
  private canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement
  private context: CanvasRenderingContext2D
  private coord: Coordinates = {
    x: null,
    y: null,
    dx: null,
    dy: null
  }
  private radius: number = null

  attached(): void {
    this.context = this.canvas.getContext('2d')
    this.coord.x = this.canvas.width/2
    this.coord.y = this.canvas.height-30
    this.coord.dx = 2
    this.coord.dy = -2
    this.radius = 10

    //block
    setInterval(()=>this.draw(), 15)
  }

  renderPlayer(): void {
    this.context.beginPath()
    this.context.rect(210, 470, 60, 15)
    this.context.fillStyle = 'rgba(100,174,177,0.77)'
    this.context.fill()
    this.context.strokeStyle = '#000'
    this.context.stroke()
    this.context.closePath()
  }

  renderBall(): void {
    //ball
    this.context.beginPath()
    this.context.arc(this.coord.x, this.coord.y, this.radius, 0, Math.PI*2, false)
    this.context.fillStyle = '#bf6666'
    this.context.fill()
    this.context.strokeStyle = '#000'
    this.context.stroke()
    this.context.closePath()
  }

  draw(): void {
    this.context.clearRect(0,0, this.canvas.width, this.canvas.height)
    this.renderBall()
    // ball movement

    switch (true) {
      // contact right
      case (this.coord.x > this.canvas.width - this.radius): {
        this.coord.dx = -2
        this.coord.x += this.coord.dx
        this.coord.y += this.coord.dy
        break
      }
      // contact top
      case (this.coord.y < this.radius): {
        this.coord.dy = 2
        this.coord.x += this.coord.dx
        this.coord.y += this.coord.dy
        break
      }
      // contact left
      case this.coord.x < this.radius: {
        this.coord.dx = 2
        this.coord.x += this.coord.dx
        this.coord.y += this.coord.dy
        break
      }
      case (this.coord.y > this.canvas.height - this.radius): {
        this.coord.dy = -2
        this.coord.x += this.coord.dx
        this.coord.y += this.coord.dy
        break
      }
      default : {
        this.coord.x += this.coord.dx
        this.coord.y += this.coord.dy
      }
    }
  }

}
