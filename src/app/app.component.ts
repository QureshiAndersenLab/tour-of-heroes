import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroesComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular tour of heroes';
}
