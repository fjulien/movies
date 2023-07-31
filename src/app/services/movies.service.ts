import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MovieUpcomingListApi } from '../models/the-movie.model';


@Injectable({
  providedIn: 'root',
})
export class MoviesServiceService {
  private readonly httpClient = inject(HttpClient)
  private readonly url = `${environment.theMovie.url}/movie/upcoming`;

  getListUpcoming(): Observable<MovieUpcomingListApi> {
    const params = new HttpParams();
    return this.httpClient.get<MovieUpcomingListApi>(this.url);
  }
}
