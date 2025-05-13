import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '@models/hero.model';
import { HeroService } from '@services/hero.service';

@Component({
  selector: 'app-add-hero',
  standalone: true,
  imports: [],
  templateUrl: './add-hero.component.html',
  styleUrl: './add-hero.component.css',
})
export class AddHeroComponent {
  constructor(private _heroService: HeroService, private _router: Router) {}

  addHero(name: string): void {
    name = name.trim();
    if (!name) return;

    const newHero: Hero = { name } as Hero;

    this._heroService.addHero(newHero).subscribe((_) => {
      this._router.navigate(['/heroes']);
    });
  }
}
