import { TestBed } from '@angular/core/testing';

import { GameLogicService } from './game-logic.service';

describe('GameLogikService', () => {
  let service: GameLogicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameLogicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
