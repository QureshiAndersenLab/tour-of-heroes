import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Hero } from '@models/hero.model';
import { HeroService } from '@services/hero.service';
import { SearchHeroComponent } from '../search-hero/search-hero.component';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchHeroComponent, HeroComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private _heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this._heroService
      .getHeroes()
      .subscribe((hero) => (this.heroes = hero.slice(1, 5)));
  }
}
