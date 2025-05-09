import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from '@components/messages/messages.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MessagesComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular tour of heroes';
}
