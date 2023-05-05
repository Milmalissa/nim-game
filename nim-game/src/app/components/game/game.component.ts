import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameLogicService } from '../../services/game-logic.service';
import { Player } from '../../models/player';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, OnDestroy {
  sticks: string[] = [];
  winnerMessage = '';
  isPlayerTurn = false;
  private subscriptions: Subscription = new Subscription();

  constructor(private gameService: GameLogicService) { }

  ngOnInit(): void {
    this.startGame();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public startGame(): void {
    this.gameService.initializeGame();
    this.sticks = this.gameService.getSticks();
    this.gameService.startGame();
    this.isPlayerTurn = this.gameService.getCurrentPlayer() === Player.PLAYER;

    this.subscriptions.add(
      this.gameService.message$.subscribe(message => {
        this.winnerMessage = message;
      })
    );
  }

  playerMove(takenSticks: number): void {
    this.gameService.playerMove(takenSticks);
  }

}
