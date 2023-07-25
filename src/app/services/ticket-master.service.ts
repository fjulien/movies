import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketMasterService {

  constructor(private readonly httpClient :HttpClient) {
    
   }

   search(): Observable<any>{
      return this.httpClient.get(`https://app.ticketmaster.com/discovery/v2/events?apikey=&postalCode=33000&locale=fr&city=Bordeaux`);
   }
}
