var $URL, $socket;

$(function (data) {

  var ENV = 'development';
  var $WS;

  var data = 5000;

  if (ENV === 'development') {
    $URL = 'http://localhost:' + 3000;
    $WS = $URL;
  } else if (ENV === 'production') {
    console.log('hello');
    $URL = 'https://real-time-chess.herokuapp.com'  ;
    console.log($URL)
    $WS = $URL;
  }

  $socket = io.connect();
});