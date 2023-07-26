import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketMasterService {
  private readonly apiKey:string = process.env['NX_KEY_API_TICKET_MASTER']!;

  constructor(private readonly httpClient: HttpClient) {

  }

  search(): Observable<any> {
    const params = new HttpParams()
    .append('apikey', this.apiKey)
    .append('postalCode', 33000)
    .append('local', 'fr');
    return this.httpClient.get(`https://app.ticketmaster.com/discovery/v2/events?apikey=&postalCode=33000&locale=fr&city=Bordeaux`);
  }
}
