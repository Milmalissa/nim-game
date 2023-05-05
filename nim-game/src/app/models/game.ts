import { Player } from './player';

export class Game {
  currentPlayer: Player;
  sticks: string[];

  constructor(currentPlayer: Player, sticks: string[]) {
    this.currentPlayer = currentPlayer;
    this.sticks = sticks;
  }
}
