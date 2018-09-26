import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() hero: any;
  @Input() showHeroDetails: (heroId: number) => void;
}
