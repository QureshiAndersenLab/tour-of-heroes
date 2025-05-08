import { Component } from '@angular/core';
import { HeroesComponent } from '@components/heroes/heroes.component';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from '@components/messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroesComponent, CommonModule, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular tour of heroes';
}
