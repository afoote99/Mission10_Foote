import { Bowler } from './Bowler';
import { TourneyMatch } from './TourneyMatch';

export type Team = {
  teamId: number;
  teamName: string;
  captainId?: number;
  bowlers?: Bowler[];
  tourneyMatchEvenLaneTeams?: TourneyMatch[];
  tourneyMatchOddLaneTeams?: TourneyMatch[];
};
