import { Component, OnInit } from '@angular/core';
import { Hero } from '@models/hero.model';
import { CommonModule } from '@angular/common';
import { HeroService } from '@services/hero.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private _heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this._heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
