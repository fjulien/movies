import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TicketMaster } from '../models/ticket-master.model';


@Injectable({
  providedIn: 'root',
})
export class TicketMasterService {
  private readonly httpClient = inject(HttpClient)
  private readonly url = environment.ticketMaster.url;
  private readonly apiKey = environment.ticketMaster.apiKey;


  search(): Observable<TicketMaster> {
    const params = new HttpParams()
      .append('apikey', this.apiKey)
      .append('postalCode', 33000)
      .append('local', 'fr');
    return this.httpClient.get<TicketMaster>(`${this.url}/events?apikey=${this.apiKey}&postalCode=33000&locale=fr&city=Bordeaux`);
  }
}
