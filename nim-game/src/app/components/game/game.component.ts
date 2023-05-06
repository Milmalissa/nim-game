import { Component, OnInit } from '@angular/core';
import { GameLogicService } from '../../services/game-logic.service';
import { Player } from '../../models/player';
import {Stick} from '../../models/stick';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public sticks: Stick[] = [];
  public winnerMessage = '';
  public isPlayerTurn = false;

  constructor(private gameService: GameLogicService) { }

  ngOnInit(): void {
    this.startGame();
  }

  public startGame(): void {
    this.gameService.initializeGame();
    this.sticks = this.gameService.getSticks();
    this.gameService.startGame();
    this.isPlayerTurn = this.gameService.getCurrentPlayer() === Player.PLAYER;

    this.gameService.message$.subscribe(message => {
      this.winnerMessage = message;
    });
  }

  playerMove(takenSticks: number): void {
    this.gameService.playerMove(takenSticks);
  }

}
