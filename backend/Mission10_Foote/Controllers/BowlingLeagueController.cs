using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Mission10_Foote.Controllers.Data;

namespace Mission10_Foote.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BowlingLeagueController : ControllerBase
    {
        //setting up constructor
        private IBowlingRepository _bowlingRepository;

        public BowlingLeagueController(IBowlingRepository temp)
        {
            _bowlingRepository = temp;
        }

        [HttpGet("Bowlers")]
        public IEnumerable<Bowler> GetBowlers()
        {
            return _bowlingRepository.Bowlers.ToArray();
        }

        [HttpGet("BowlerScores")]
        public IEnumerable<BowlerScore> GetBowlerScores()
        {
            return _bowlingRepository.BowlerScores.ToArray();
        }

        [HttpGet("MatchGames")]
        public IEnumerable<MatchGame> GetMatchGames()
        {
            return _bowlingRepository.MatchGames.ToArray();
        }

        [HttpGet("Teams")]
        public IEnumerable<Team> GetTeams()
        {
            return _bowlingRepository.Teams.ToArray();
        }

        [HttpGet("Tournaments")]
        public IEnumerable<Tournament> GetTournaments()
        {
            return _bowlingRepository.Tournaments.ToArray();
        }

        [HttpGet("TourneyMatches")]
        public IEnumerable<TourneyMatch> GetTourneyMatches()
        {
            return _bowlingRepository.TourneyMatches.ToArray();
        }

        [HttpGet("ZtblBowlerRatings")]
        public IEnumerable<ZtblBowlerRating> GetZtblBowlerRatings()
        {
            return _bowlingRepository.ZtblBowlerRatings.ToArray();
        }

        [HttpGet("ZtblSkipLabels")]
        public IEnumerable<ZtblSkipLabel> GetZtblSkipLabels()
        {
            return _bowlingRepository.ZtblSkipLabels.ToArray();
        }

        [HttpGet("ZtblWeeks")]
        public IEnumerable<ZtblWeek> GetZtblWeeks()
        {
            return _bowlingRepository.ZtblWeeks.ToArray();
        }
    }
}
