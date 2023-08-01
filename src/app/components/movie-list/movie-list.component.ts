import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { theMovieFeature } from 'src/app/stores/selectors/the-movie.selector';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  theMovieFeature = theMovieFeature()

  ngOnInit(): void {
    this.theMovieFeature.getMovies();
  }
}
