var $URL, $socket;

$(function () {

  // var ENV = 'dev';
  // var $WS;
  //
  // var data = 5000;
  //
  // if (ENV === 'dev') {
  //   // $URL = 'https://real-time-chess.herokuapp.com:' + data;
  //   $URL = 'http://localhost:' + data;
  //   $WS = $URL;
  // } else if (ENV === 'heroku') {
  //   $URL = 'https://real-time-chess.herokuapp.com/';
  //   $WS = 'https://real-time-chess.herokuapp.com:8000/';
  // }
  //
  // $socket = io.connect($WS);

  //
  $.get("/port", function( data ) {
    console.log(data);
    //var ENV = 'openshift';
    var ENV = 'dev';
    var $WS;

    if (ENV === 'dev') {
      $URL = 'http://real-time-chess.herokuapp.com:' + data;
      // $URL = 'https://localhost:' + data;
      $WS = $URL;
    } else if (ENV === 'heroku') {
      $URL = 'https://real-time-chess.herokuapp.com/';
      $WS = 'https://real-time-chess.herokuapp.com:8000/';
    }

    $socket = io.connect($WS);
  });

});
