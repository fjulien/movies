import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesEntity } from 'src/app/models/the-movie.model';
import { SourceFromTheMoviePipe } from "../../pipes/source-from-the-movie/source-from-the-movie.pipe";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-movie-card',
    standalone: true,
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.scss'],
    imports: [CommonModule, SourceFromTheMoviePipe, RouterModule]
})
export class MovieCardComponent {

  @Input() movie !: MoviesEntity;

}
