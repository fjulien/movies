import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sourceFromTheMovie',
  standalone: true,
})
export class SourceFromTheMoviePipe implements PipeTransform {

  transform(posterPath: string): string {
    return `https://themoviedb.org/t/p/w500${posterPath}`;
  }
}