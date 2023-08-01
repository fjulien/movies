import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { MovieEntity, MovieUpcomingListApi } from '../models/the-movie.model';


@Injectable({
  providedIn: 'root',
})
export class MoviesServiceService {
  private readonly httpClient = inject(HttpClient)
  private readonly url = `${environment.theMovie.url}/movie`;

  getListUpcoming(): Observable<MovieUpcomingListApi> {
    return this.httpClient.get<MovieUpcomingListApi>(`${this.url}/upcoming`);
  }

  getMovie(movieId:number):Observable<MovieEntity>{
    return this.httpClient.get<MovieEntity>(`${this.url}/${movieId}`);

  }
}
