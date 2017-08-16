tester.

// //First Team
// varMinions = {Name: "The Minion Monsters", location: "San Francisco", teamCap: 100000000, dRating: 50, oRating: 45}
// varForrest = {Name: "Forrest Primus", Pos: "Point Guard", Cap: 25000000, dRating: 45, oRating: 47}
// varSamantha = {Name: "Samantha Easey", Pos: "Shooting Guard", Cap: 25000000, dRating: 45, oRating: 48}
// varBob = {Name: "Bob Minion", Pos: "Small Forward", Cap: 22000000, dRating: 45, oRating: 43}
// varKevin = {Name: "Kevin Minion", Pos: "Power Forward", Cap: 18000000, dRating: 30, oRating: 43}
// varStuart = {Name: "Stuart Minion", Pos: "Center", Cap: 10000000, dRating: 20, oRating: 24}
//
// //Second Team
// varBuzz = {Name: "The Buzz Lightyears", location: "New York", teamCap: 100000000, dRating: 50, oRating: 45}
// varOliver = {Name: "Oliver Primus", Pos: "Point Guard", Cap: 30000000, dRating: 48, oRating: 48}
// varMurray = {Name: "Bill Murray", Pos: "Shooting Guard", Cap: 21000000, dRating: 45, oRating: 45}
// varHanks = {Name: "Tom Hanks", Pos: "Small Forward", Cap: 27000000, dRating: 45, oRating: 48}
// varNicholson = {Name: "Jack Nicholson", Pos: "Power Forward", Cap: 17000000, dRating: 28, oRating: 44}
// varSandler = {Name: "Adam Sandler", Pos: "Center", Cap: 50000000, dRating: 15, oRating: 20}
//
//
//
// //Grading System
// var playerRating = dRating + oRating;
//
//
// if (playerRating >= 90 && playerRating <= 100) {
// var playerGrade = "A";
// } else if (playerRating >= 75 && playerRating <= 89) {
// var playerGrade = "B";
// } else if (playerRating >= 60 && playerRating <= 74) {
// var playerGrade = "C";
// } else if (playerRating >= 45 && playerRating <= 59) {
// var playerGrade = "D";
// } else if (playerRating >= 30 && playerRating <= 44) {
// var playerGrade = "E";
// } else {
// var playerGrade = "F";
// }
//
//
// function rating(x){
// if (x >= 450 && x <= 500) {
// var team = "A"
// return team;
// } else if (x >= 350 && x <= 449) {
// var team = "B";
// return team;
// } else if (x >= 250 && x <= 349) {
// var team = "C";
// return team;
// } else if (x >= 150 && x <= 240) {
// var team = "D";
// return team;
// } else if (x >= 50 && x <= 149) {
// var team = "E";
// return team;
// } else {
// var team = "F";
// return team;
// }
// }



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
} else if (team1 < team2) {
    console.log("Team 2 wins!");
} else {
    console.log("It's a goddamn tie");
}

console.log("Team 1 has " + team1total + " wins. Team 2 has " + tean2total + " wins.");
}
