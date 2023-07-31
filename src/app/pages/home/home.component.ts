import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from 'src/app/components/movie-list/movie-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
