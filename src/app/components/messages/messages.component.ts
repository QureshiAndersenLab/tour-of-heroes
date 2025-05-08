import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MessagesService } from '@services/messages.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
})
export class MessagesComponent {
  constructor(public messagesService: MessagesService) {}
}
