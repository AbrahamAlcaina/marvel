import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heroes-component',
  styleUrls: ['./heroes.component.scss'],
  templateUrl: './heroes.component.html'
})
export class HeroesComponent {
  @Input() heroes: string[];
}
