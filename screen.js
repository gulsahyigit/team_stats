const team = {
    _players: [
      {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
    {
      firstName: 'Fernandez',
      lastName: 'Oliva',
      age: 12
    },
    {
      firstName: 'Rodrigo',
      lastName: 'Anchezko',
      age: 11
    },
    ],
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
    },
    {
        opponent: 'FBD',
        teamPoints: 48,
        opponentPoints: 30
    },
    {
        opponent: 'NBA',
        teamPoints: 40,
        opponentPoints: 25
    },
    ],
  
    get players(){
      return this._players
    },
  
    get games(){
      return this._players
    },
  
    addPlayer (firstName, lastName, age){
        let player = {
          firstName: firstName,
          lastName: lastName,
          age: age
        }
        this.players.push(player)
    },
  
    addGame(opp, myPts, oppPts) {
      const game = {
        opponent: opp,
        teamPoints: myPts,
        opponentPoints: oppPts
      }
      this.games.push(game)
    } 
  }
  
  team.addPlayer('Steph', 'Curry', 28)
  team.addPlayer('Lisa', 'Leslie', 44)
  team.addPlayer('Bugs', 'Bunny', 76)
  
  console.log(team.players)
  
  team.addGame('Titans', 100, 98)
  
  console.log(team.games)