var $URL, $socket;
  
$(function () {
  //var ENV = 'openshift';
  var ENV = 'dev';
  var $WS;

  if (ENV === 'dev') {
    $URL = 'http://127.0.0.1:3000';
    $WS = $URL;
  } else if (ENV === 'heroku') {
    $URL = 'http://real-time-chess.herokuapp.com/';
    $WS = 'http://real-time-chess.herokuapp.com:8000/';
  }

  $socket = io.connect($WS);
});