import {Component, ElementRef, ViewChild} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /**
   * 'plug into' DOM canvas element using @ViewChild
   */
  @ViewChild('canvas') canvasEl: ElementRef;


  /**
   * Reference Canvas object
   */
  private _CANVAS: any;


  /**
   * Reference the context for the Canvas element
   */
  private _CONTEXT: any;


  // @embed("imgs/2016ssk_akb068.jpg")
  private image: any;

  private imagePoint: any;

  constructor(public navCtrl: NavController) {

    this.image = new Image();
    this.image.src = 'http://art17.photozou.jp/pub/996/3139996/photo/231969749_624.v1520733748.jpg';

    this.imagePoint = new Image();
    this.imagePoint.src = 'https://assets.chatwork.com/images/emoticon2x/emo_lucky.gif';

  }

  ionViewDidLoad() {
    this._CANVAS = this.canvasEl.nativeElement;
    this._CANVAS.width = 500;
    this._CANVAS.height = 500;


    this.initialiseCanvas();
    this.drawCircle();
  }

  initialiseCanvas() {
    if (this._CANVAS.getContext) {
      this.setupCanvas();
    }
  }

  setupCanvas() {
    this._CONTEXT = this._CANVAS.getContext('2d');
    this._CONTEXT.fillStyle = "#3e3e3e";
    this._CONTEXT.fillRect(0, 0, 500, 500);
  }

  clearCanvas() {
    this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
    this.setupCanvas();
  }

  drawCircle() {
    this.clearCanvas();
    this._CONTEXT.beginPath();

    // x, y, radius, startAngle, endAngle
    this._CONTEXT.arc(this._CANVAS.width / 2, this._CANVAS.height / 2, 80, 0, 2 * Math.PI);
    this._CONTEXT.lineWidth = 1;
    this._CONTEXT.strokeStyle = '#ffffff';
    this._CONTEXT.stroke();
  }

  drawSquare() {
    this.clearCanvas();

    this._CONTEXT.beginPath();
    this.drawBackGround();
    this._CONTEXT.drawImage(this.imagePoint, 30, 30);
    this._CONTEXT.arc(this._CANVAS.width / 2, 200, 80, 0, 2 * Math.PI);
    this._CONTEXT.lineWidth = 5;
    this._CONTEXT.strokeStyle = '#ffff00';
    this._CONTEXT.stroke();

  }

  drawBackGround(){
    this._CONTEXT.drawImage(this.image, 0, 0);
  }


  drawSequence(points: any[]){

    points.forEach((value,number) => {
      this._CONTEXT.drawImage(this.imagePoint, value.x, value.y);
    })

    this._CONTEXT.restore();

  }

  randomIcon(){
    this.clearCanvas();
    this.drawBackGround();
    this.drawSequence(this.randomPoints());
  }

  randomPoints() :any[] {

    let loop = Math.floor(Math.random() * 6) +50;

    let points :any[] = new Array(loop+1);



    for(var i = 0; i < loop ; i++){
      points[i] = this.randomPoint();
    }

    return points;
  }

  randomPoint() :any{

  let min = 20;
  let max = this._CANVAS.width - 20 ;

  let value = {
    x: Math.floor(Math.random() * (max - min +1)) + min,
    y: Math.floor(Math.random() * (max - min +1)) + min
  };

  return value;
  }





}
