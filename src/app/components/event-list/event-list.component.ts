import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { TicketMasterService } from 'src/app/services/ticket-master.service';
import { ticketMasterFeature } from 'src/app/stores/selectors/ticket-master.selector';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  ticketMasterFeature = ticketMasterFeature()

  ngOnInit(): void {
    this.ticketMasterFeature.getEvents();
  }
}
