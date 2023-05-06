import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SticksComponent } from './sticks.component';
import { Stick } from '../../models/stick';

describe('SticksComponent', () => {
  let component: SticksComponent;
  let fixture: ComponentFixture<SticksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SticksComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SticksComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the stick image', () => {
    const stick: Stick = {imgSrc: 'path/to/stick/image.png'};
    component.stick = stick;
    fixture.detectChanges();

    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.src).toContain(stick.imgSrc);
  });

});
