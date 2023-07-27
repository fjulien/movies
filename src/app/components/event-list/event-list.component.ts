import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketMasterService } from 'src/app/services/ticket-master.service';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  private readonly ticketMasterService:TicketMasterService = inject( TicketMasterService);

  ngOnInit(): void {
    this.ticketMasterService.search().subscribe(e=>console.log(e))
  }
}
