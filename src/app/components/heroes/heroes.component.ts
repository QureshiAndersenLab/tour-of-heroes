import { Component, OnInit } from '@angular/core';
import { Hero } from '@models/hero.model';
import { CommonModule } from '@angular/common';
import { HeroService } from '@services/hero.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
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

  addHero(name: string): void {
    name = name.trim();
    if (!name) return;

    const newHero: Hero = { name } as Hero;

    this._heroService.addHero(newHero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter((currHero) => currHero.id !== hero.id);
    this._heroService.deleteHero(hero.id).subscribe();
  }
}
