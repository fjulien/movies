import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { BodyResponse, MovieEntity, MovieUpcomingListApi } from '../models/the-movie.model';


@Injectable({
  providedIn: 'root',
})
export class MoviesServiceService {
  private readonly httpClient = inject(HttpClient)
  private readonly url = `${environment.theMovie.url}`;
  private readonly account_id = 20224550;

  getListUpcoming(): Observable<MovieUpcomingListApi> {
    return this.httpClient.get<MovieUpcomingListApi>(`${this.url}/movie/upcoming`);
  }

  getMovie(movieId:number):Observable<MovieEntity>{
    return this.httpClient.get<MovieEntity>(`${this.url}/movie/${movieId}`);
  }

  postToWatchlist(body: {media_type: 'movie', media_id: number, watchlist: boolean}):Observable<BodyResponse>{
    return this.httpClient.post<BodyResponse>(`${this.url}/account/${this.account_id}/watchlist`, body)
  }
}
