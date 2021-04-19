import {Coordinates} from "./coordinates";

export class Ball {
  canvas: HTMLCanvasElement
  coordinates: Coordinates
  radius: number

  constructor(coordinates: Coordinates, radius: number, canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.coordinates = coordinates
    this.radius = radius
  }

  drawBall(context: CanvasRenderingContext2D): void{
    this.checkCollusion()
    context.beginPath()
    context.arc(this.coordinates.x, this.coordinates.y, this.radius, 0, Math.PI*2, false)
    context.fillStyle = '#bf6666'
    context.fill()
    context.strokeStyle = '#000'
    context.stroke()
    context.closePath()
  }

  checkCollusion(): void {
    switch (true) {
      // contact right
      case (this.coordinates.x > this.canvas.width - this.radius): {
        this.coordinates.dx = -2
        this.coordinates.x += this.coordinates.dx
        this.coordinates.y += this.coordinates.dy
        break
      }
      // contact top
      case (this.coordinates.y < this.radius): {
        this.coordinates.dy = 2
        this.coordinates.x += this.coordinates.dx
        this.coordinates.y += this.coordinates.dy
        break
      }
      // contact left
      case this.coordinates.x < this.radius: {
        this.coordinates.dx = 2
        this.coordinates.x += this.coordinates.dx
        this.coordinates.y += this.coordinates.dy
        break
      }
      case (this.coordinates.y > this.canvas.height - this.radius): {
        this.coordinates.dy = -2
        this.coordinates.x += this.coordinates.dx
        this.coordinates.y += this.coordinates.dy
        break
      }
      default : {
        this.coordinates.x += this.coordinates.dx
        this.coordinates.y += this.coordinates.dy
      }
    }
  }
}
