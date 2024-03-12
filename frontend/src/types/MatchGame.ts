import { TourneyMatch } from './TourneyMatch';

export type MatchGame = {
  matchId: number;
  gameNumber: number;
  winningTeamId?: number;
  match: TourneyMatch;
};
