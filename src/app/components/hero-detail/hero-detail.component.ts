import { CommonModule, Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '@models/hero.model';
import { HeroService } from '@services/hero.service';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;

  route = inject(ActivatedRoute);

  constructor(private _heroService: HeroService, private _location: Location) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this._heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  handleBack(): void {
    this._location.back();
  }
}
