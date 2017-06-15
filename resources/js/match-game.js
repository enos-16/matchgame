var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function() {
  var oldArray = [];
  for (i = 1; i < 9; i++) {
    oldArray.push(1).push(1);
  }

  var rndmArray = [];
  while (oldArray.length > 0) {
    var rndmIndex = Math.floor(Math.random() * array.lenth) - 1;
    var rndmNumber = oldArray.splice(0, 1);
    rndmArray.push(rndmNumber);
  }
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
