$(document).ready(function(){

  $('#scoreboard').hide();
  $('tbody').hide();
  $('#bullet1').hide();
  $('#bullet2').hide();
  $('#gunLeft').hide();
  $('#laserRight').hide();

  let clickX;
  let clickY;

  let gunshot = new Audio('images/gunshotsoundeffect.mp3');
  let lasershot = new Audio('images/lasergunsoundeffect.mp3');
  // $('#container').on('mousemove', function(event){
  //   console.log(`X is:${event.clientX}`);
  //   console.log(`Y is:${event.clientY}`);
  // });

  $('.square').on('click', function(event){
  //   // console.log(this);
  //   // console.log((this.id));
  //
  clickX = event.pageX;
  clickY = event.pageY-180;

  if (currentPlayer===$('#name1').val()){
    $('#gunLeft').attr('src', $('#gunLeft').attr('src') + '?' + Math.random());
    gunshot.play();
    $('#gunLeft').load();
    $('#bullet1').animate({left: `${clickX}px`, top: `${clickY}px`},800, function(){
      $('#bullet1').css('left', '5%');
      $('#bullet1').css('top', '650px');
    });
  }else{
    $('#laserRight').attr('src', $('#laserRight').attr('src') + '?' + Math.random());
    lasershot.play();
    $('#bullet2').animate({left: `${clickX}px`, top: `${clickY}px`},800, function(){
      $('#bullet2').css('left', '90%');
      $('#bullet2').css('top', '650px');
    });
  };



    // $('#bullet1').css('left', '5%');
    // $('#bullet1').css('top', '650px');

    // $('#bullet1').animate( {left: 5%, top: 650px} ,0)



    turn( parseInt(this.id), currentPlayer );
    if (board[this.id]==='x'){
      $(this).append('<img class="oorx" src="images/xImage.png" />');
      // $(this).append('<img id="explosion" class="oorx" src="images/explosion1.gif" />');
      // setTimeout(
      // function(){
      //   $('.square img').attr("src", "images/xImage.png")
      // }  , 2000)
      //$('#0 img').attr("src", "images/xImage.png")}  , 2000)
    }else{
      $(this).append('<img class="oorx" src="images/oImage.png" />');
      // $(this).append('<img id="explosion" class="oorx" src="images/explosion1.gif" />');
      // $(this).append('<img class="oorx" src="images/explosion1.gif" />');
      // setTimeout(
      // function(){
      //   $('#explosion').css('display', 'none')
      // }  , 1500)
      // $(this).append(explosion);
    }
  })

  $('.playAgain').on('click', function(){
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
    $('#bullet1').show();
    $('#bullet2').show();
    $('#gunLeft').show();
    $('#laserRight').show();

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

  const explosion = '<img id="explosion" src="images/explosion1.gif"/>'

  // let shootStart ={
  //   leftX:,
  //   leftY:,
  //   rightX:,
  //   rightY:
  // }


});  //end document ready
