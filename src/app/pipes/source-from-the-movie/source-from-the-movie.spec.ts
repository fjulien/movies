import { SourceFromTheMovie } from './source-from-the-movie.pipe';

describe('source-from-the-movie', () => {
  it('create an instance', () => {
    const pipe = new SourceFromTheMovie();
    expect(pipe).toBeTruthy();
  });
});
