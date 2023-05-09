import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameLogicService } from '../../services/game-logic.service';
import { Player } from '../../models/player';
import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let gameService: GameLogicService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      providers: [ GameLogicService ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    gameService = TestBed.inject(GameLogicService);
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start a new game on initialization', () => {
    spyOn(gameService, 'initializeGame');
    spyOn(gameService, 'getSticks').and.returnValue([{imgSrc: '../../../assets/images/Stick.png'}, {imgSrc: '../../../assets/images/Stick.png'}]);
    spyOn(gameService, 'startGame');
    spyOn(gameService, 'getTurnHistory').and.returnValue(['Player 1 started the game']);
    component.ngOnInit();

    expect(gameService.initializeGame).toHaveBeenCalled();
    expect(gameService.getSticks).toHaveBeenCalled();
    expect(gameService.startGame).toHaveBeenCalled();
    expect(component.sticks.length).toEqual(2);
    expect(component.history).toEqual(['Player 1 started the game']);

    gameService.message$.next('You wins!');
    gameService.message$.subscribe(message => {
      expect(component.winnerMessage).toEqual('You wins!');
    });
  });

  it('should handle player moves', () => {
    spyOn(gameService, 'playerMove');
    component.playerMove(1);
    expect(gameService.playerMove).toHaveBeenCalledWith(1);
  });

  it('should update winner message when game service emits a message', () => {
    gameService.message$.next('You wins!');
    expect(component.winnerMessage).toEqual('You wins!');
  });

});
