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
  var colors = [
    'hsl(25, 85%, 65%)',
    'hsl(55, 85%, 65%)',
    'hsl(90, 85%, 65%)',
    'hsl(160, 85%, 65%)',
    'hsl(220, 85%, 65%)',
    'hsl(265, 85%, 65%)',
    'hsl(310, 85%, 65%)',
    'hsl(360, 85%, 65%)'
  ];

  $game.empty();
  $game.data('turnCards', []);

  for (var valueIndex = 0; valueIndex < rndmArray.length; valueIndex++) {
    var value = rndmArray[valueIndex];
    var color = colors[value - 1];
    var data = {
      value: value,
      color: color,
      isFlipped: false
    };

    var $cardElmnt = $('<div class="col-xs-3 card"></div>');
    $cardElmnt.data(data);

    $game.append($cardElmnt);
  }

  $('.card').click(function() {
    MatchGame.flipCard($(this), $('#game'));
  });
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
  if ($card.data('isFlipped')) {
    return;
  }

  $card.css('background-color', $card.data('color'))
    .text($card.data('value'))
    .data('isFlipped', true);

  var turnCards = $game.data('turnCards');
  turnCards.push($card);

  if (turnCards.length === 2) {
    if (turnCards[0].data('value') === turnCards[1].data('value')) {
      var cssSync = {
        backgroundColor: 'rgb(153, 153, 153)',
        color: 'rgb(204, 204, 204)'
      };
      turnCards[0].css(cssSync);
      turnCards[1].css(cssSync);
    } else {
      var card1 = turnCards[0];
      var card2 = turnCards[1];
      window.setTimeout(function() {
        card1.css('background-color', 'rgb(32, 64, 86)')
          .text('')
          .data('isFlipped', false);
        card2.css('background-color', 'rgb(32, 64, 86)')
          .text('')
          .data('isFlipped', false);
      }, 350);
    }
    $game.data('turnCards', []);
  }
};
