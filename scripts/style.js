//First Team
varMinions = {Name: "The Minion Monsters", location: "San Francisco", teamCap: 100000000, dRating: 50, oRating: 45}
varForrest = {Name: "Forrest Primus", Pos: "Point Guard", Cap: 25000000, dRating: 45, oRating: 47}
varSamantha = {Name: "Samantha Primus", Pos: "Shooting Guard", Cap: 25000000, dRating: 45, oRating: 48}
varBob = {Name: "Bob Minion", Pos: "Small Forward", Cap: 22000000, dRating: 45, oRating: 43}
varKevin = {Name: "Kevin Minion", Pos: "Power Forward", Cap: 18000000, dRating: 30, oRating: 43}
varStuart = {Name: "Stuart Minion", Pos: "Center", Cap: 10000000, dRating: 20, oRating: 24}

//Second Team
varBuzz = {Name: "The Buzz Lightyears", location: "New York", teamCap: 100000000, dRating: 50, oRating: 45}
varOliver = {Name: "Oliver Primus", Pos: "Point Guard", Cap: 30000000, dRating: 48, oRating: 48}
varMurray = {Name: "Bill Murray", Pos: "Shooting Guard", Cap: 21000000, dRating: 45, oRating: 45}
varHanks = {Name: "Tom Hanks", Pos: "Small Forward", Cap: 27000000, dRating: 45, oRating: 48}
varNicholson = {Name: "Jack Nicholson", Pos: "Power Forward", Cap: 17000000, dRating: 28, oRating: 44}
varSandler = {Name: "Adam Sandler", Pos: "Center", Cap: 50000000, dRating: 15, oRating: 20}



//Grading System
var playerRating = dRating + oRating;


if (playerRating >= 90 && playerRating <= 100) {
var playerGrade = "A";
} else if (playerRating >= 75 && playerRating <= 89) {
var playerGrade = "B";
} else if (playerRating >= 60 && playerRating <= 74) {
var playerGrade = "C";
} else if (playerRating >= 45 && playerRating <= 59) {
var playerGrade = "D";
} else if (playerRating >= 30 && playerRating <= 44) {
var playerGrade = "E";
} else {
var playerGrade = "F";
}


if (teamRating >= 450 && teamRating <= 500) {
var teamGrade = "A";
} else if (teamRating >= 350 && teamRating <= 449) {
var teamGrade = "B";
} else if (teamRating >= 250 && teamRating <= 349) {
var teamGrade = "C";
} else if (teamRating >= 150 && teamRating <= 240) {
var teamGrade = "D";
} else if (teamRating >= 50 && teamRating <= 149) {
var teamGrade = "E";
} else {
var teamGrade = "F";
}


//Game Logic
var score;

function game (team1, team2) {
  if ()
}
