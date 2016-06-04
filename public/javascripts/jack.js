var $URL, $socket;

$(function (data) {

  var ENV = 'dev';
  var $WS;

  var data = 5000;

  if (ENV === 'dev') {
    $URL = 'https://real-time-chess.herokuapp.com:' + 3000;
    $URL = 'http://localhost:' + data;
    $WS = $URL;
  } else if (ENV === 'heroku') {
    $URL = 'https://real-time-chess.herokuapp.com/';
    $WS = 'https://real-time-chess.herokuapp.com:8000/';
  }

  $socket = io.connect($WS);
})
