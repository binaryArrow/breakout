export class CanvasFunctions {
  constructor(canvas: HTMLCanvasElement) {
    canvas = document.getElementById('canvas') as HTMLCanvasElement
    const context = canvas.getContext('2d')
    this.canvas = canvas
    this.context = context
  }

  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D


  drawPlayer() {
    //block
    this.context.beginPath()
    this.context.rect(210, 470, 60, 15)
    this.context.fillStyle = 'rgba(100,174,177,0.77)'
    this.context.fill()
    this.context.strokeStyle = '#000'
    this.context.stroke()
    this.context.closePath()
    console.log('fghgjhgvjh')
  }

  drawBall() {
    //ball
    this.context.beginPath()
    this.context.arc(210, 420, 10, 0, Math.PI * 2, false)
    this.context.fillStyle = '#bf6666'
    this.context.fill()
    this.context.strokeStyle = '#000'
    this.context.stroke()
    this.context.closePath()

  }
}
