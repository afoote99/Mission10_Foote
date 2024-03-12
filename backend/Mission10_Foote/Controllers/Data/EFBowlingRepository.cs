namespace Mission10_Foote.Controllers.Data
{
    public class EFBowlingRepository : IBowlingRepository
    {
        private BowlingLeagueContext _BowlingLeagueContext;

        public EFBowlingRepository(BowlingLeagueContext temp) {
        _BowlingLeagueContext = temp;
        }

        public IEnumerable<Bowler> Bowlers => _BowlingLeagueContext.Bowlers;

        public IEnumerable<BowlerScore> BowlerScores => _BowlingLeagueContext.BowlerScores;

        public IEnumerable<MatchGame> MatchGames => _BowlingLeagueContext.MatchGames;

        public IEnumerable<Team> Teams => _BowlingLeagueContext.Teams;

        public IEnumerable<Tournament> Tournaments => _BowlingLeagueContext.Tournaments;

        public IEnumerable<TourneyMatch> TourneyMatches => _BowlingLeagueContext.TourneyMatches;

        public IEnumerable<ZtblBowlerRating> ZtblBowlerRatings => _BowlingLeagueContext.ZtblBowlerRatings;

        public IEnumerable<ZtblSkipLabel> ZtblSkipLabels => _BowlingLeagueContext.ZtblSkipLabels;

        public IEnumerable<ZtblWeek> ZtblWeeks => _BowlingLeagueContext.ZtblWeeks;
    }
}
