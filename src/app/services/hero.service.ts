import { Injectable } from '@angular/core';
import { Hero } from '@models/hero.model';
import { HEROES } from '@mocks/mock-heroes';

import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private message: MessagesService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.message.add('Heroes: fetched heroes');
    return heroes;
  }
}
