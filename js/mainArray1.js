$(document).ready(function(){

  $('#scoreboard').hide();
  $('tbody').hide();

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

  $('.playAgain').on('click', function(){
    console.log('reset');
    resetGame();
    $('#winWindow').css('display','none');
    $('#drawWindow').css('display','none');
  });

  $('.noPlayAgain').on('click', function(){
    $('body').css('opacity', 0);
    $('body').css('z-index', 100);
    setTimeout(function () {
      window.location.href='http://google.com';
    }, 1500);
  });


  $('#beginButton').on('click', function(){
    if($('#name1').val()===""){
      $('#name1').attr('value', 'Player 1');
    };
    if($('#name2').val()===""){
      $('#name2').attr('value', 'Player 2');
    };
    $('#scoreboard').show();
    $('tbody').show();
    $('#name1Display').text($('#name1').val());
    $('#name2Display').text($('#name2').val());
    currentPlayer = $('#name1').val();
    $('#names').css('display', 'none');
  })


});  //end document ready
