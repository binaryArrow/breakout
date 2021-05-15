import {setInterval} from "timers";
import {Coordinates} from "./coordinates";
import {Ball} from "./ball";
import {Player} from "./player";
import {Controls} from "./controls";
import {autoinject} from "aurelia-framework";
import {observable} from 'aurelia-framework';

@autoinject
export class Breakout {
  @observable({changeHandler: 'bottomTouchedChangeHandler'})
  private touchedBottom: boolean
  private ball: Ball
  private player: Player
  private canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement
  private context: CanvasRenderingContext2D
  private coordinates: Coordinates = {
    x: null,
    y: null,
    dx: null,
    dy: null
  }
  private interval = setInterval(()=>this.draw(), 15)

  bottomTouchedChangeHandler(oldValue: boolean, newValue: boolean): void {
    if(newValue != undefined) {
      alert("GAME OVER");
    document.location.reload();
    clearInterval(this.interval); // Needed for Chrome to end ga
    }
  }


  attached(): void {
    this.context = this.canvas.getContext('2d')
    this.coordinates.x = this.canvas.width/2
    this.coordinates.y = this.canvas.height-30
    this.coordinates.dx = 2
    this.coordinates.dy = -2
    this.ball = new Ball(this.coordinates,8, this.canvas)
    this.player = new Player(75, 10, this.canvas)

    this.interval
  }

  draw(): void {
    this.touchedBottom = this.ball.touchedBottom
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.ball.touchedPlayer(this.player)
    this.ball.drawBall(this.context)
    this.player.drawPlayer(this.context)

  }
}
