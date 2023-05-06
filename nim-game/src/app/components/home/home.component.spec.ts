import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a start game button', () => {
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.textContent).toContain('Start Game');
  });

  it('should have a router link to the game component', () => {
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.getAttribute('ng-reflect-router-link')).toBe('/game');
  });
});
