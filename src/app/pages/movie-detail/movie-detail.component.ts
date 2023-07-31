import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { theMovieFeature } from 'src/app/stores/selectors/the-movie.selector';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent  implements OnInit {

  ticketMasterFeature = theMovieFeature();
  activatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    const movieId = this.activatedRoute.snapshot.params['id'];
    this.ticketMasterFeature.getMovie(movieId)
  }

}

