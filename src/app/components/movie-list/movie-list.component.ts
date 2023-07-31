import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { theMovieFeature } from 'src/app/stores/selectors/the-movie.selector';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  ticketMasterFeature = theMovieFeature()

  ngOnInit(): void {
    this.ticketMasterFeature.getMovies();
  }
}
