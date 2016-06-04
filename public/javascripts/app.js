var $URL, $socket;

$(function () {

  $.get("/port", function( data ) {
    //var ENV = 'openshift';
    var ENV = 'dev';
    var $WS;

    if (ENV === 'dev') {
      $URL = 'https://real-time-chess.herokuapp.com/' + data;
      $WS = $URL;
    } else if (ENV === 'heroku') {
      $URL = 'https://real-time-chess.herokuapp.com/';
      $WS = 'https://real-time-chess.herokuapp.com:8000/';
    }

    $socket = io.connect($WS);
  });

});
