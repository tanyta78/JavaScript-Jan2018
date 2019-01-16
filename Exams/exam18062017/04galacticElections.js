function galacticElections (ballots) {
  let election = new Map();
  let systemWinners = new Map();
  let winnersTotalVotes = new Map();
 
  let totalVotes = 0;
 
  for (const ballot of ballots) {
    if (!election.has(ballot.system)) {
      election.set(ballot.system, new Map());
    }
 
    if (!election.get(ballot.system).has(ballot.candidate)) {
      election.get(ballot.system).set(ballot.candidate, 0);
    }
 
    let candidateSystemVotes = election.get(ballot.system).get(ballot.candidate);
    election.get(ballot.system).set(ballot.candidate, candidateSystemVotes + ballot.votes);
    totalVotes += ballot.votes;
  }
 
  for (const [system, candidates] of election) {
    election.set(system, new Map([...candidates].sort((c1, c2) => c2[1] - c1[1])));
  }
 
  for (const [system, candidates] of election) {
    let winner = [...candidates.keys()][0];
    if (!systemWinners.has(winner)) {
      systemWinners.set(winner, new Map());
    }
 
    systemWinners.get(winner).set(system, [...candidates.values()].reduce((x, y) => x + y));
  }
 
  for (const [winner, systems] of systemWinners) {
    systemWinners.set(winner, new Map([...systems].sort((x, y) => y[1] - x[1])));
  }
 
  for (const [winner, systems] of systemWinners) {
    winnersTotalVotes.set(winner, [...systems.values()].reduce((x, y) => x + y));
  }
 
  winnersTotalVotes = new Map([...winnersTotalVotes].sort((x, y) => y[1] - x[1]));
 
  let winnerName = [...winnersTotalVotes][0][0];
  let winnerVotes = [...winnersTotalVotes][0][1];
  let winnerPercentage = (winnerVotes / totalVotes) * 100;
 
  if ([...winnersTotalVotes].length === 1) {
    console.log(`${winnerName} wins with ${winnerVotes} votes`);
    console.log(`${winnerName} wins unopposed!`);
    return;
  }
 
  let runnerUpName = [...winnersTotalVotes][1][0];
  let runnerUpPercentage = ([...winnersTotalVotes][1][1] / totalVotes) * 100;
 
  if (winnerPercentage > 50) {
    console.log(`${winnerName} wins with ${winnerVotes} votes`);
    console.log(`Runner up: ${runnerUpName}`);
    for (const [system, votes] of systemWinners.get(runnerUpName)) {
      console.log(`${system}: ${votes}`);
    }
    return;
  }
 
  console.log(`Runoff between ${winnerName} with ${Math.floor(winnerPercentage)}% and ${runnerUpName} with ${Math.floor(runnerUpPercentage)}%`);
}