export interface TicketMaster {
  _embedded: Embedded;
  _links: Links;
  page: Page;
}
export interface Embedded {
  events?: (EventsEntity)[] | null;
}
export interface EventsEntity {
  name: string;
  type: string;
  id: string;
  test: boolean;
  description: string;
  url: string;
  locale: string;
  images?: (ImagesEntity)[] | null;
  sales: Sales;
  dates: Dates;
  classifications?: (ClassificationsEntity)[] | null;
  promoter: SegmentOrGenreOrSubGenreOrPromotersEntityOrPromoterOrTypeOrSubType;
  promoters?: (SegmentOrGenreOrSubGenreOrPromotersEntityOrPromoterOrTypeOrSubType)[] | null;
  priceRanges?: (PriceRangesEntity)[] | null;
  _links: Links1;
  _embedded: Embedded1;
}
export interface ImagesEntity {
  ratio: string;
  url: string;
  width: number;
  height: number;
  fallback: boolean;
}
export interface Sales {
  public: Public;
}
export interface Public {
  startDateTime: string;
  startTBD: boolean;
  startTBA: boolean;
  endDateTime: string;
}
export interface Dates {
  start: Start;
  timezone: string;
  status: Status;
  spanMultipleDays: boolean;
}
export interface Start {
  localDate: string;
  localTime: string;
  dateTime: string;
  dateTBD: boolean;
  dateTBA: boolean;
  timeTBA: boolean;
  noSpecificTime: boolean;
}
export interface Status {
  code: string;
}
export interface ClassificationsEntity {
  primary: boolean;
  segment: SegmentOrGenreOrSubGenreOrPromotersEntityOrPromoterOrTypeOrSubType;
  genre: SegmentOrGenreOrSubGenreOrPromotersEntityOrPromoterOrTypeOrSubType;
  subGenre: SegmentOrGenreOrSubGenreOrPromotersEntityOrPromoterOrTypeOrSubType;
  family: boolean;
}
export interface SegmentOrGenreOrSubGenreOrPromotersEntityOrPromoterOrTypeOrSubType {
  id: string;
  name: string;
}
export interface PriceRangesEntity {
  type: string;
  currency: string;
  min: number;
  max: number;
}
export interface Links1 {
  self: VenuesEntityOrSelfOrAttractionsEntityOrFirstOrNextOrLast;
  attractions?: (VenuesEntityOrSelfOrAttractionsEntityOrFirstOrNextOrLast)[] | null;
  venues?: (VenuesEntityOrSelfOrAttractionsEntityOrFirstOrNextOrLast)[] | null;
}
export interface VenuesEntityOrSelfOrAttractionsEntityOrFirstOrNextOrLast {
  href: string;
}
export interface Embedded1 {
  venues?: (VenuesEntity)[] | null;
  attractions?: (AttractionsEntity)[] | null;
}
export interface VenuesEntity {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  images?: (ImagesEntity1)[] | null;
  postalCode: string;
  timezone: string;
  city: City;
  state: State;
  country: Country;
  address: Address;
  location: Location;
  upcomingEvents: UpcomingEvents;
  _links: Links2;
}
export interface ImagesEntity1 {
  url: string;
  fallback: boolean;
}
export interface City {
  name: string;
}
export interface State {
  name: string;
  stateCode: string;
}
export interface Country {
  name: string;
  countryCode: string;
}
export interface Address {
  line1: string;
}
export interface Location {
  longitude: string;
  latitude: string;
}
export interface UpcomingEvents {
  ticketnet: number;
  _total: number;
  _filtered: number;
}
export interface Links2 {
  self: VenuesEntityOrSelfOrAttractionsEntityOrFirstOrNextOrLast;
}
export interface AttractionsEntity {
  name: string;
  type: string;
  id: string;
  test: boolean;
  url: string;
  locale: string;
  externalLinks: ExternalLinks;
  aliases?: (string)[] | null;
  images?: (ImagesEntity)[] | null;
  classifications?: (ClassificationsEntity1)[] | null;
  upcomingEvents: UpcomingEvents1;
  _links: Links2;
}
export interface ExternalLinks {
  youtube?: (YoutubeEntityOrTwitterEntityOrItunesEntityOrLastfmEntityOrFacebookEntityOrWikiEntityOrSpotifyEntityOrInstagramEntityOrHomepageEntity)[] | null;
  twitter?: (YoutubeEntityOrTwitterEntityOrItunesEntityOrLastfmEntityOrFacebookEntityOrWikiEntityOrSpotifyEntityOrInstagramEntityOrHomepageEntity)[] | null;
  itunes?: (YoutubeEntityOrTwitterEntityOrItunesEntityOrLastfmEntityOrFacebookEntityOrWikiEntityOrSpotifyEntityOrInstagramEntityOrHomepageEntity)[] | null;
  lastfm?: (YoutubeEntityOrTwitterEntityOrItunesEntityOrLastfmEntityOrFacebookEntityOrWikiEntityOrSpotifyEntityOrInstagramEntityOrHomepageEntity)[] | null;
  facebook?: (YoutubeEntityOrTwitterEntityOrItunesEntityOrLastfmEntityOrFacebookEntityOrWikiEntityOrSpotifyEntityOrInstagramEntityOrHomepageEntity)[] | null;
  wiki?: (YoutubeEntityOrTwitterEntityOrItunesEntityOrLastfmEntityOrFacebookEntityOrWikiEntityOrSpotifyEntityOrInstagramEntityOrHomepageEntity)[] | null;
  spotify?: (YoutubeEntityOrTwitterEntityOrItunesEntityOrLastfmEntityOrFacebookEntityOrWikiEntityOrSpotifyEntityOrInstagramEntityOrHomepageEntity)[] | null;
  instagram?: (YoutubeEntityOrTwitterEntityOrItunesEntityOrLastfmEntityOrFacebookEntityOrWikiEntityOrSpotifyEntityOrInstagramEntityOrHomepageEntity)[] | null;
  musicbrainz?: (MusicbrainzEntity)[] | null;
  homepage?: (YoutubeEntityOrTwitterEntityOrItunesEntityOrLastfmEntityOrFacebookEntityOrWikiEntityOrSpotifyEntityOrInstagramEntityOrHomepageEntity)[] | null;
}
export interface YoutubeEntityOrTwitterEntityOrItunesEntityOrLastfmEntityOrFacebookEntityOrWikiEntityOrSpotifyEntityOrInstagramEntityOrHomepageEntity {
  url: string;
}
export interface MusicbrainzEntity {
  id: string;
}
export interface ClassificationsEntity1 {
  primary: boolean;
  segment: SegmentOrGenreOrSubGenreOrPromotersEntityOrPromoterOrTypeOrSubType;
  genre: SegmentOrGenreOrSubGenreOrPromotersEntityOrPromoterOrTypeOrSubType;
  subGenre: SegmentOrGenreOrSubGenreOrPromotersEntityOrPromoterOrTypeOrSubType;
  type: SegmentOrGenreOrSubGenreOrPromotersEntityOrPromoterOrTypeOrSubType;
  subType: SegmentOrGenreOrSubGenreOrPromotersEntityOrPromoterOrTypeOrSubType;
  family: boolean;
}
export interface UpcomingEvents1 {
  'mfx-fi': number;
  ticketmaster: number;
  'mfx-it': number;
  'mfx-cz': number;
  ticketnet: number;
  'mfx-de': number;
  'mfx-pl': number;
  _total: number;
  _filtered: number;
}
export interface Links {
  first: VenuesEntityOrSelfOrAttractionsEntityOrFirstOrNextOrLast;
  self: VenuesEntityOrSelfOrAttractionsEntityOrFirstOrNextOrLast;
  next: VenuesEntityOrSelfOrAttractionsEntityOrFirstOrNextOrLast;
  last: VenuesEntityOrSelfOrAttractionsEntityOrFirstOrNextOrLast;
}
export interface Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}
