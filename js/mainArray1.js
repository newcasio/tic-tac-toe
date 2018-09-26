$(document).ready(function(){

  $('#scoreboard').hide();
  $('tbody').hide();

  $('.square').on('click', function(){
    // console.log(this);
    // console.log((this.id));
    turn( parseInt(this.id), currentPlayer );
    if (board[this.id]==='x'){
      // $(this).append(explosion);
      $(this).append('<img class="oorx" src="images/xImage.png" />');
    }else{
      // $(this).append(explosion);
      $(this).append('<img class="oorx" src="images/oImage.png" />');
    }
  })

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
    }, 700);
  });


  $('#beginButton').on('click', function(){
    if($('#name1').val()===""){
      $('#name1').attr('value', 'Player 1');
    };
    if($('#name2').val()===""){
      $('#name2').attr('value', 'Player 2');
    };
    if($('#name1').val()===$('#name2').val()){
      alert("Usernames cannot be identical");
      location. reload(true);
      return;
    };
    $('#scoreboard').show();
    $('tbody').show();
    $('#name1Display').text($('#name1').val());
    $('#name2Display').text($('#name2').val());
    currentPlayer = $('#name1').val();
    $('#names').css('display', 'none');
  })



  // const explosion = '<img id="explosion" src="images/explosion1.gif"/>'
});  //end document ready
