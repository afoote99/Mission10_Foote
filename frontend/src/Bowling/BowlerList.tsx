import { useEffect, useState } from 'react';
import { Bowler } from '../types/Bowler';
import { Team } from '../types/Team';

//function to get the data for the bowler list
function BowlerList() {
  const [bowlerData, setBowlerData] = useState<Bowler[]>([]);
  const [teamData, setTeamData] = useState<Team[]>([]);

  //Fetching data from the bowlers table first and then the teams table
  useEffect(() => {
    const fetchBowlerData = async () => {
      const bowlResponse = await fetch(
        'https://localhost:44364/BowlingLeague/Bowlers',
      );
      const bowlers = await bowlResponse.json();
      setBowlerData(bowlers);
    };

    const fetchTeamData = async () => {
      const teamResponse = await fetch(
        'https://localhost:44364/BowlingLeague/Teams',
      );
      const teams = await teamResponse.json();
      setTeamData(teams);
    };

    fetchBowlerData();
    fetchTeamData();
  }, []);

  //get the team name by teamID
  const getTeamName = (teamId: any) => {
    const team = teamData.find((t) => t.teamId === teamId);
    return team ? team.teamName : 'Unknown';
  };

  //filter for only sharks and marlins
  const filteredBowlerData = bowlerData.filter((bowler) => {
    const teamName = getTeamName(bowler.teamId);
    return teamName === 'Marlins' || teamName === 'Sharks';
  });

  //returning information, to get teams we use the getTeamName function and pass it the teamId
  return (
    <>
      <div className="row">
        <h4 className="text-center">Bowlers</h4>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Middle Initial</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredBowlerData.map((b) => (
            <tr key={b.bowlerId}>
              <td>{b.bowlerFirstName}</td>
              <td>{b.bowlerLastName}</td>
              <td>{b.bowlerMiddleInit}</td>
              <td>{getTeamName(b.teamId)}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
