import { Bowler } from './Bowler';

export type BowlerScore = {
  matchId: number;
  gameNumber: number;
  bowlerId: number;
  rawScore?: number;
  handiCapScore?: number;
  wonGame: boolean;
  bowler?: Bowler;
};
