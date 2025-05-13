import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Hero } from '@models/hero.model';
import { HeroService } from '@services/hero.service';
import { HeroComponent } from '../hero/hero.component';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  Subject,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-search-hero',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroComponent],
  templateUrl: './search-hero.component.html',
  styleUrl: './search-hero.component.css',
})
export class SearchHeroComponent implements OnInit {
  heroes$!: Observable<Hero[]>;

  private searchTerm = new Subject<string>();

  constructor(private _heroService: HeroService) {}

  search(term: string): void {
    this.searchTerm.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerm.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((term: string) => this._heroService.searchHeroes(term))
    );
  }
}
