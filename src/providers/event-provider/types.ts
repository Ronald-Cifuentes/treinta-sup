/* eslint-disable @typescript-eslint/no-explicit-any */
import {Events} from 'config/constants';

export enum Services {
  GTM = 'GTM',
  Appboy = 'Appboy',
  FbPixel = 'FbPixel',
  Analytics = 'analytics',
  Amplitude = 'Amplitude',
  FullStory = 'FullStory',
  Adjust = 'Adjust',
}

export interface Event {
  eventName: Events | string;
  args?: any;
}

export interface GlobalEvent {
  brazeEvents?: Event[];
  fbPixelEvents?: Event[];
  analyticsEvents?: Event[];
  amplitudeEvents?: Event[];
  fullStoryEvents?: Event[];
  adjustEvents?: Event[];
}
