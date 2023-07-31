import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesEntity } from 'src/app/models/the-movie.model';
import { SourceFromTheMovie } from "../../pipes/source-from-the-movie/source-from-the-movie.pipe";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    imports: [CommonModule, SourceFromTheMovie, RouterModule]
})
export class CardComponent {

  @Input() movie !: MoviesEntity;

}
