import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesEntity } from 'src/app/models/the-movie.model';
import { SecurePipe } from "../../pipes/src-image/src-image.pipe";

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    imports: [CommonModule, SecurePipe]
})
export class CardComponent {

  @Input() movie !: MoviesEntity;

}
