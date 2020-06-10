// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {
  return callback(stringList[0]);
}

// ⭐️ Example Challenge END ⭐️

///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *
 * 2. Which of the two uses a closure? How can you tell?
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *
 */

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  };
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}

/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

// generate random number
// random number represent points
// two teams that get random point
// the random number should be between 0-2
// random number uses math.random and math.floor and a max number
/*Code Here*/

function inning(/*Code Here*/) {
  return Math.floor(Math.random() * 3);
}
console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

// I set the parameters with callback function:(inning, numInnings)
// cb parameter

function finalScore(cb, numInnings) {
  let home = 0;
  let away = 0;

  for (let i = 0; i < numInnings; i++) {
    //  home = cb() + home
    home += cb();
    away += cb();
  }
  let score = {
    Home: home,
    Away: away,
  };
  return score;
}
console.log(finalScore(inning, 7));

/*Code Here*/

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(cb, numInnings) {
  let home = 0;
  let away = 0;
  for (let i = 0; i < numInnings; i++) {
    let homePerInning = cb();
    let awayPerInning = cb();
    home += homePerInning;
    away += awayPerInning;
    //   return `${inningNumber}inning: 0 - 2`
    // }
    console.log(i + 1 + "inning " + home + "-" + away);
  }
  console.log(`finalScore ${home} - ${away} `);
}
scoreboard(inning, 9);
