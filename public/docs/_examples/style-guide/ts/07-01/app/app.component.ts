import { Component, OnInit } from '@angular/core';

import { HeroService } from './heroes/shared/hero.service';
import { Hero } from './heroes/shared/hero.model';

@Component({
  moduleId: module.id,
  selector: 'sg-app',
  templateUrl: 'app.component.html',
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
