import { Injectable } from '@angular/core';
import { Hero } from '@models/hero.model';
import { HEROES } from '@mocks/mock-heroes';

import { catchError, Observable, of, tap } from 'rxjs';
import { MessagesService } from './messages.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private _messagesService: MessagesService,
    private _http: HttpClient
  ) {}

  getHeroes(): Observable<Hero[]> {
    return this._http.get<Hero[]>(this.heroesUrl).pipe(
      tap((_) => this._log('fetched heroes')),
      catchError(this._handleError<Hero[]>('getHeroes', []))
    );
  }

  getHero(id: number): Observable<Hero> {
    return this._http.get<Hero>(`${this.heroesUrl}/${id}`).pipe(
      tap((_) => this._log(`fetched hero id=${id}`)),
      catchError(this._handleError<Hero>(`getHero id=${id}`))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this._http.post<Hero>(this.heroesUrl, hero).pipe(
      tap((_) => this._log(`Hero ${hero.name} added!`)),
      catchError(this._handleError<Hero>('addHero'))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this._http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((_) => this._log(`updated hero id=${hero.id}`)),
      catchError(this._handleError<any>('updateHero'))
    );
  }

  deleteHero(id: number): Observable<Hero> {
    return this._http
      .delete<Hero>(`${this.heroesUrl}/${id}`, this.httpOptions)
      .pipe(
        tap((_) => this._log(`Hero ${id} delete!`)),
        catchError(this._handleError<Hero>('deleteHero'))
      );
  }

  private _log(message: string) {
    this._messagesService.add(`HeroService: ${message}`);
  }

  private _handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this._log(`${operation} failed: ${error.body.error}`);

      return of(result as T);
    };
  }
}
