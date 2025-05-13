import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Hero } from '@models/hero.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  @Input() hero!: Hero;
}
