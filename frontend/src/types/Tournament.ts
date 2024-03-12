import { TourneyMatch } from './TourneyMatch';

export type Tournament = {
  tourneyId: number;
  tourneyDate?: string;
  tourneyLocation?: string;
  tourneyMatches?: TourneyMatch[];
};
