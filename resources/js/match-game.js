var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generaterndmArray = function() {
  var oldArray = [];

  for (var value = 1; value <= 8; value++) {
    oldArray.push(value);
    oldArray.push(value);
  }

  var rndmArray = [];

  while (oldArray.length > 0) {
    var rndmIndex = Math.floor(Math.random() * oldArray.length);
    var rndmNumber = oldArray.splice(rndmIndex, 1)[0];
    rndmArray.push(rndmNumber);
  }

  return rndmArray;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(rndmArray, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
