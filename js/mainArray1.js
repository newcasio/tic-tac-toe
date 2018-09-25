$(document).ready(function(){

  $('#box0').on('click', function(){
    currentPosition = $('#box0');
    turn(0,currentPlayer);
  });
  $('#box1').on('click', function(){
    currentPosition = $('#box1');
    turn(1,currentPlayer);
  });
  $('#box2').on('click', function(){
    currentPosition = $('#box2');
    turn(2,currentPlayer);
  });
  $('#box3').on('click', function(){
    currentPosition = $('#box3');
    turn(3,currentPlayer);
  });
  $('#box4').on('click', function(){
    currentPosition = $('#box4');
    turn(4,currentPlayer);
  });
  $('#box5').on('click', function(){
    currentPosition = $('#box5');
    turn(5,currentPlayer);
  });
  $('#box6').on('click', function(){
    currentPosition = $('#box6');
    turn(6,currentPlayer);
  });
  $('#box7').on('click', function(){
    currentPosition = $('#box7');
    turn(7,currentPlayer);
  });
  $('#box8').on('click', function(){
    currentPosition = $('#box8');
    turn(8,currentPlayer);
  });

  $('#playAgain').on('click', function(){
    resetGame();
    $('#endOfGame').css('display', 'none');
  });

  $('#noPlayAgain').on('click', function(){
    $('#endOfGame').append(endPic);
  });

});  //end document ready
