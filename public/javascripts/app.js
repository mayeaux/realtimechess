var $URL, $socket;

$(function (data) {

  var ENV = 'development';
  var $WS;

  var data = 5000;

  if (ENV === 'development') {
    $URL = 'http://localhost:' + 3000;
    $WS = $URL;
  } else if (ENV === 'production') {
    $URL = 'http://real-time-chess:' + 3000;
    $WS = $URL;
  }

  $socket = io.connect($WS);
});