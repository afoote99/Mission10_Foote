import { Team } from './Team';
import { BowlerScore } from './BowlerScore';

export type Bowler = {
  bowlerId: number;
  bowlerLastName?: string;
  bowlerFirstName?: string;
  bowlerMiddleInit?: string;
  bowlerAddress?: string;
  bowlerCity?: string;
  bowlerState?: string;
  bowlerZip?: string;
  bowlerPhoneNumber?: string;
  teamId?: number;
  bowlerScores?: BowlerScore[];
  team?: Team;
};
