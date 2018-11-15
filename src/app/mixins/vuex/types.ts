export interface LocationState {
  list: any;
  error: boolean;
}

export interface FeedState {
  error: boolean;
  feed: any;
}

export interface MixinState {
  location?: LocationState;
  locations: LocationState[];
  feed?: FeedState;
  feeds: FeedState[];
}
