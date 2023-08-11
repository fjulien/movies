export type MovieUpcomingListApi = {
  dates: Dates;
  page: number;
  results?: (MoviesEntity)[] | null;
  total_pages: number;
  total_results: number;
}
export type Dates = {
  maximum: string;
  minimum: string;
}
export type MoviesEntity = {
  adult: boolean;
  backdrop_path: string;
  genre_ids?: (number)[] | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type BodyResponse = {
    success: boolean,
    status_code: number,
    status_message: string
}

export type MovieEntity = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: BelongsToCollection;
  budget: number;
  genres?: (GenresEntity)[] | null;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies?: (ProductionCompaniesEntity)[] | null;
  production_countries?: (ProductionCountriesEntity)[] | null;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages?: (SpokenLanguagesEntity)[] | null;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export type BelongsToCollection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path?: null;
}
export type GenresEntity = {
  id: number;
  name: string;
}
export type ProductionCompaniesEntity = {
  id: number;
  logo_path?: string | null;
  name: string;
  origin_country: string;
}
export type ProductionCountriesEntity = {
  iso_3166_1: string;
  name: string;
}
export type SpokenLanguagesEntity = {
  english_name: string;
  iso_639_1: string;
  name: string;
}
