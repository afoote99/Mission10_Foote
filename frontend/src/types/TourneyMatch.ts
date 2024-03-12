import { Team } from './Team';
import { MatchGame } from './MatchGame';
import { Tournament } from './Tournament';

export type TourneyMatch = {
  matchId: number;
  tourneyId?: number;
  lanes?: string;
  oddLaneTeamId?: number;
  evenLaneTeamId?: number;
  evenLaneTeam?: Team;
  oddLaneTeam?: Team;
  matchGames?: MatchGame[];
  tourney?: Tournament;
};
