import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TicketMasterService } from './services/ticket-master.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sortir-a-bordeaux';
  readonly count = signal(0);
  constructor(private readonly ticketMasterService:TicketMasterService){
    ticketMasterService.search().subscribe(e=>console.log(e))
  }
}
