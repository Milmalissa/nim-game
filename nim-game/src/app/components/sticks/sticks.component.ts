import { Component, Input } from '@angular/core';
import { Stick } from '../../models/stick';

@Component({
  selector: 'app-sticks',
  templateUrl: './sticks.component.html',
  styleUrls: ['./sticks.component.scss']
})
export class SticksComponent {

  constructor() { }

  @Input() stick: Stick;

}
