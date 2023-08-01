import { Component, OnDestroy, OnInit, Signal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { theMovieFeature } from 'src/app/stores/selectors/the-movie.selector';
import { MovieEntity } from 'src/app/models/the-movie.model';
import { SourceFromTheMoviePipe } from "../../pipes/source-from-the-movie/source-from-the-movie.pipe";
import { ActivatedRoute } from '@angular/router';
import { log } from 'console';
import { Observable, filter, of } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  imports: [CommonModule, SourceFromTheMoviePipe]
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  movie$!: Observable<MovieEntity>;
  private readonly theMovieFeature = theMovieFeature();
  private readonly activeRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    const movieId = this.activeRoute.snapshot.params['id'];
    this.theMovieFeature.getMovie(+movieId);
    this.movie$ = this.theMovieFeature.selectsMovie;
  }

  ngOnDestroy(): void {
        this.theMovieFeature.removeMovie();

  }

}
