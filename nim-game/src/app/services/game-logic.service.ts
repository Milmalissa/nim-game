import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { Game } from '../models/game';
import { BehaviorSubject} from 'rxjs';
import { Stick } from '../models/stick';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {

  private game: Game;
  public message$ = new BehaviorSubject<string>('');
  private turnHistory: string[] = [];



  constructor() { }

  public getSticks(): Stick[] {
    return this.game.sticks;
  }

  public getCurrentPlayer(): Player {
    return this.game.currentPlayer;
  }

  public getTurnHistory(): string[] {
    return this.turnHistory;
  }

  public setTurnHistory(history: string[]): void {
    this.turnHistory = history;
  }

  public initializeGame(): void {
    this.game = new Game(this.getRandomFirstPlayer(), this.initializeSticks(13));
    this.message$.next('');
  }

  private initializeSticks(stickCount: number): Stick[] {
    const gameSticks: Stick[] = [];
    for (let i = 0; i < stickCount; i++) {
      const newStick: Stick = {imgSrc: '../../../assets/images/Stick.png'};
      gameSticks.push(newStick);
    }
    return gameSticks;
  }

  private getRandomFirstPlayer(): Player {
    const randomTurn: boolean = Math.random() < 0.5;
    const firstPlayer: Player = randomTurn ? Player.PLAYER : Player.BOT;

    return firstPlayer;
  }

  public startGame(): void {
    if (this.game.currentPlayer !== Player.PLAYER) {
      this.computerMove();
    }
  }

  public playerMove(takenSticks: number): void {
    if (takenSticks > 0 && takenSticks <= this.game.sticks.length && this.game.sticks.length > 1) {
      this.turnHistory.push('You have taken ' + takenSticks);
      this.turn(takenSticks, Player.PLAYER);
    } else {
      this.message$.next('Computer wins!');
    }
  }

  public computerMove(): void {
    const takenSticks = Math.floor(Math.random() * 3) + 1;

    if (takenSticks >= this.game.sticks.length && this.game.sticks.length > 1 && this.game.sticks.length - takenSticks <= 0) {
      this.computerMove();
    } else {
      this.turnHistory.push('The computer has taken ' + takenSticks);
      this.turn(takenSticks, Player.BOT);
    }
  }

  private turn(takenSticks: number, player: Player): void {
      for (let i = 0; i < takenSticks; i++) {
        this.game.sticks.pop();
      }

      if (this.game.sticks.length === 1) {
        this.message$.next('Winner: ' + player);
      } else {
        if (player === Player.PLAYER) {
          this.game.currentPlayer = Player.BOT;
          this.computerMove();
        } else {
          this.game.currentPlayer = Player.PLAYER;
        }
      }
  }
}
