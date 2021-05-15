import {Coordinates} from "./coordinates";
import {Player} from "./player";

export class Ball {
  canvas: HTMLCanvasElement
  coordinates: Coordinates
  radius: number
  touchedBottom = false

  constructor(coordinates: Coordinates, radius: number, canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.coordinates = coordinates
    this.radius = radius
  }

  drawBall(context: CanvasRenderingContext2D): void {
    this.checkCollusion()
    context.beginPath()
    context.arc(this.coordinates.x, this.coordinates.y, this.radius, 0, Math.PI * 2, false)
    context.fillStyle = '#bf6666'
    context.fill()
    context.strokeStyle = '#000'
    context.stroke()
    context.closePath()
  }

  touchedPlayer(player: Player) {
    if (this.coordinates.y + this.coordinates.dy >= this.canvas.height - this.radius - player.height-9) {
      if (this.coordinates.x > player.startingPointFromX && this.coordinates.x < player.startingPointFromX + player.width ) {
        this.coordinates.dy = -this.coordinates.dy;
      }
    }
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
      // contact bottom
      case (this.coordinates.y > this.canvas.height - this.radius): {
        this.coordinates.dy = -2
        this.coordinates.x += this.coordinates.dx
        this.coordinates.y += this.coordinates.dy
        this.touchedBottom = true
        break
      }
      default : {
        this.coordinates.x += this.coordinates.dx
        this.coordinates.y += this.coordinates.dy
      }
    }
  }
}
