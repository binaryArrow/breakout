import {Controls} from "./controls";
import {inject} from 'aurelia-dependency-injection';

@inject(Controls)
export class Player {
  canvas: HTMLCanvasElement
  width: number
  height: number
  startingPointFromX: number
  controls = new Controls()


  constructor(width: number, height: number, canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.width = width
    this.height = height
    this.startingPointFromX = (canvas.width - width)/2
  }

  drawPlayer(context: CanvasRenderingContext2D):void {
    console.log(this.controls.rightPressed)

    context.beginPath()
    context.rect(this.startingPointFromX, (this.canvas.height - this.height - 4) , this.width, this.height)
    context.fillStyle = 'rgba(100,174,177,0.77)'
    context.fill()
    context.strokeStyle = '#000'
    context.stroke()
    context.closePath()
  }


}
