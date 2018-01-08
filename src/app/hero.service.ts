import { Injectable, EventEmitter, Output } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  @Output() open: EventEmitter<any> = new EventEmitter();

  constructor() {}

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  fireEvent(hero: Hero) {
    this.open.emit( hero);
  }

}
