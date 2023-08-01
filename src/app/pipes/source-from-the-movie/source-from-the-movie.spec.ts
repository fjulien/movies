import { SourceFromTheMoviePipe } from './source-from-the-movie.pipe';

describe('source-from-the-movie', () => {
  it('create an instance', () => {
    const pipe = new SourceFromTheMoviePipe();
    expect(pipe).toBeTruthy();
  });
});
