import { TestBed } from '@angular/core/testing';
import { GameLogicService } from './game-logic.service';
import { Player } from '../models/player';

describe('GameLogicService', () => {
  let service: GameLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize the game with 13 sticks', () => {
    service.initializeGame();
    expect(service.getSticks().length).toEqual(13);
  });

  it('should randomly select the first player', () => {
    spyOn(Math, 'random').and.returnValue(0.4);
    service.initializeGame();
    expect(service.getCurrentPlayer()).toEqual(Player.PLAYER);
  });

  it('should not allow the player to take more sticks than available', () => {
    service.initializeGame();
    const sticks = service.getSticks().length;
    service.playerMove(sticks + 1);
    expect(service.message$.value).toEqual('Computer wins!');
  });

  it('should end the game when there is only one stick left', () => {
    service.initializeGame();
    const sticks = service.getSticks();
    sticks.splice(0, sticks.length - 1);
    service.playerMove(1);
    expect(service.getSticks().length).toEqual(1);
    expect(service.message$.value).toContain(` wins!`);
  });

  it('should allow the computer to make a valid move', () => {
    service.initializeGame();
    service.startGame();
    const initialSticksLength = service.getSticks().length;
    service.computerMove();
    expect(service.getSticks().length).toBeLessThan(initialSticksLength);
  });
});
