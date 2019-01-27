import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameEmitterFired = new EventEmitter<number>();
  timeInterval;
  gameCounter: number = 0;
  startButtonEnabled = true;
  stopButtonEnabled = false;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.startButtonEnabled = false;
    this.stopButtonEnabled = true;
    this.timeInterval = setInterval(() => { 
      this.gameEmitterFired.emit(this.gameCounter + 1); 
      this.gameCounter++
    }, 1000);
  }

  onStop() {
    clearInterval(this.timeInterval);
    this.gameCounter = 0;
    this.startButtonEnabled = true;
    this.stopButtonEnabled = false;
  }

}
