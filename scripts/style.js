//First Team
varMinions = {Name: "The Minion Monsters", location: "San Francisco", teamCap: 100000000, dRating: 50, oRating: 45}
varForrest = {Name: "Forrest Primus", Pos: "Point Guard", Cap: 25000000, dRating: 45, oRating: 47}
varSamantha = {Name: "Samantha Easey", Pos: "Shooting Guard", Cap: 25000000, dRating: 45, oRating: 48}
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




//Random Number
function getRandomScore(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Game Logic

// Score function
function getScore () {
  if (teamGrade === "A") {
console.log(getRandomScore(90, 140));
} else if (teamGrade === "B") {
console.log(getRandomScore(85, 135));
} else if (teamGrade === "C") {
console.log(getRandomScore(80, 130));
} else if (teamGrade === "D") {
console.log(getRandomScore(75, 125));
} else if (teamGrade === "E") {
console.log(getRandomScore(70, 120));
} else {
console.log(getRandomScore(65, 110));
}
}

console.log(total);




getRandomInteger(100, 140);
