import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from 'src/app/components/event-list/event-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EventListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
