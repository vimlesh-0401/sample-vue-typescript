export interface CountryState {
  name: string;
  flag: string;
  capital: string;
  population: string;
  region: string;
  languages: string[];
  nativeName: string;
  area: number;
}

export interface FeedState {
  id: number;
  title: string;
  content: string;
}

export interface QuoteState {
  author: string;
  category: string;
  quote: string;
}

export interface MixinState {
  country?: CountryState;
  countries: CountryState[];
  feed?: FeedState;
  feeds: FeedState[];
  quote?: QuoteState;
}
