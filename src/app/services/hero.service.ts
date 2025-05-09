import { Injectable } from '@angular/core';
import { Hero } from '@models/hero.model';
import { HEROES } from '@mocks/mock-heroes';

import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private _messagesService: MessagesService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this._messagesService.add('Heroes: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    this._messagesService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
