import { Player } from './player';
import {Stick} from './stick';

export class Game {
  currentPlayer: Player;
  sticks: Stick[];

  constructor(currentPlayer: Player, sticks: Stick[]) {
    this.currentPlayer = currentPlayer;
    this.sticks = sticks;
  }
}
