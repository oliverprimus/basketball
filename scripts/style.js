//First Team
var player1 = {
Name: "Forrest Primus",
Pos: "Point Guard",
Cap: 25000000,
dRating: 45,
oRating: 47,
total: function () {
  return this.dRating + this.oRating;
}
}



var player2 = {
Name: "Samantha Easey",
Pos: "Shooting Guard",
Cap: 25000000,
dRating: 45,
oRating: 48,
total: function () {
  return this.dRating + this.oRating;

}
}


var player3 = {
  Name: "Bob Minion",
  Pos: "Small Forward",
  Cap: 22000000,
  dRating: 45,
  oRating: 43,
  total: function () {
    return this.dRating + this.oRating;
  }
}

var player4 = {
  Name: "Kevin Minion",
  Pos: "Power Forward",
  Cap: 18000000,
  dRating: 30,
  oRating: 43,
  total: function () {
    return this.dRating + this.oRating;
  }
}

var player5 = {
  Name: "Stuart Minion",
  Pos: "Center",
  Cap: 10000000,
  dRating: 20,
  oRating: 24,
  total: function () {
    return this.dRating + this.oRating;
  }
}


//Second Team
var player6 = {
Name: "Oliver Primus",
Pos: "Point Guard",
Cap: 30000000,
dRating: 48,
oRating: 48,
total: function () {
  return this.dRating + this.oRating;
}
}

var player7 = {
Name: "Bill Murray",
Pos: "Shooting Guard",
Cap: 21000000,
dRating: 45,
oRating: 45,
total: function () {
  return this.dRating + this.oRating;
}
}

var player8 = {
  Name: "Tom Hanks",
  Pos: "Small Forward",
  Cap: 27000000,
  dRating: 45,
  oRating: 48,
  total: function () {
    return this.dRating + this.oRating;
  }
}

var player9 = {
  Name: "Jack Nicholson",
  Pos: "Power Forward",
  Cap: 17000000,
  dRating: 28,
  oRating: 44,
  total: function () {
    return this.dRating + this.oRating;
  }
}

var player10 = {
  Name: "Adam Sandler",
  Pos: "Center",
  Cap: 50000000,
  dRating: 15,
  oRating: 20,
  total: function () {
    return this.dRating + this.oRating;
  }
 }





function rating(x){
if (x >= 450 && x <= 500) {
var team = "A"
return team;
} else if (x >= 350 && x <= 449) {
var team = "B";
return team;
} else if (x >= 250 && x <= 349) {
var team = "C";
return team;
} else if (x >= 150 && x <= 240) {
var team = "D";
return team;
} else if (x >= 50 && x <= 149) {
var team = "E";
return team;
} else {
var team = "F";
return team;
}
}



// This part stores how many wins a team has.
var team1total = 0;
var team2total = 0;


// This part provides a random number between two values.
function getRandomScore (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Random score function
function gameScore (teamGrade) {
    if (teamGrade === "A") {
        return getRandomScore(90, 140);
    } else if (teamGrade === "B") {
        return getRandomScore(80, 130);
    } else if (teamGrade === "C") {
        return getRandomScore(70, 120);
    } else if (teamGrade === "D") {
        return getRandomScore(60, 110);
    } else if (teamGrade === "E") {
        return getRandomScore(60, 100);
    } else {
        return getRandomScore(60, 90);
    }
}


// Collective team score
var minion = player1.total() + player2.total() + player3.total() + player4.total() + player5.total();

var buzz = player6.total() + player7.total() + player8.total() + player9.total() + player10.total();



var buzzTotal = 0;
var minionTotal = 0;



/* I've stored the logic into a function with the idea that it could be stored
in a click function for the user to be able to execute.
*/
function runGame() {
  // The grades are stores into a teamGrade variable
  var team1Grade = "A";
  var team2Grade = "B";

  /*
  The teamGrade variable is passed into the gameScore function which calls the
  getRandomScore function depending on the team's grade. This information is then
  stored into team variables, which is then called below in the console.log section.
  */
  var team1 = gameScore(team1Grade);
  var team2 = gameScore(team2Grade);

console.log("Team 1 has " + team1 + " and Team 2 has " + team2);

if (team1 > team2) {
    console.log("Team 1 wins!");
    buzzTotal +=1;
} else if (team1 < team2) {
    console.log("Team 2 wins!");
    minionTotal +=1;
} else {
    console.log("It's a goddamn tie");
}

console.log("Buzz has " + buzzTotal + " wins. Minions has " + minionTotal + " wins.");
}

runGame();
