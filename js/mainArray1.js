$(document).ready(function(){

  $('#scoreboard').hide();    //hide all windows except for enter name window
  $('tbody').hide();
  $('#bullet1').hide();
  $('#bullet2').hide();
  $('#gunLeft').hide();
  $('#laserRight').hide();

  const explosionSound = new Audio('images/explosion.mp3');
  const gunshot = new Audio('images/hadouken.mp3');
  const lasershot = new Audio('images/lasergunsoundeffect.mp3');
  const explosion = '<img id="explosion" src="images/explosion1.gif"/>'

  $('.square').on('click', function(event){
    let clickX = event.pageX;     //click event, record co-ordinates of mouse click
    let clickY = event.pageY-180;

    if (board[this.id]==='x'||board[this.id]=='o'){
      alert('Square taken, please choose again');
      return;
    }else{

      if (currentPlayer===$('#name1').val()){
        $('#gunLeft').attr('src', $('#gunLeft').attr('src') + '?' + Math.random());   //play gif animation, reload with ?randomnumber at end
        setTimeout(function(){
          gunshot.play();
          $('#gunLeft').load();
          $('#bullet1').animate({left: `${clickX}px`, top: `${clickY}px`},1600, function(){     //move bullet from init position to mouse click
            $('#bullet1').css('left', '5%');  //return bullet to starting position
            $('#bullet1').css('top', '650px');
          })
        },2000);
      }else{
        $('#laserRight').attr('src', $('#laserRight').attr('src') + '?' + Math.random());
        lasershot.play();
        $('#bullet2').animate({left: `${clickX}px`, top: `${clickY}px`},800, function(){
          $('#bullet2').css('left', '90%');
          $('#bullet2').css('top', '650px');
        });
      }; //end of animation

      turn( parseInt(this.id), currentPlayer );
      if (board[this.id]==='x'){
        let thisId = this.id;
        let currentSquare = $('.square')[parseInt(this.id)];
        setTimeout(function(){
          explosionSound.play();
          $(currentSquare).append(`<img id="explosion${thisId}" class="oorx" src="images/explosion1.gif" />`);  //insert img tag into current tag/square
          let imageId = thisId;
          setTimeout(
            function(){
              $(`img#explosion${imageId}`).attr("src", "images/xImage.png")  //replace img src with marker image src
            }, 2000);
        },3200);

      }else{
        explosionSound.play();
        $(this).append(`<img id="explosion${this.id}" class="oorx" src="images/explosion1.gif" />`);
        let imageId = this.id
        setTimeout(
          function(){
            $(`img#explosion${imageId}`).attr("src", "images/oImage.png")
          }  , 2000)
      } //end of turn function
    }//end of if square not taken

}); //end of click event

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
    }, 900);
  });


  $('#beginButton').on('click', function(){
    $('#bullet1').show();
    $('#bullet2').show();   //show board and side animations
    $('#gunLeft').show();
    $('#laserRight').show();

    if($('#name1').val()===""){
      $('#name1').attr('value', 'Player 1');    //if no name entered, defaults entered
    };
    if($('#name2').val()===""){
      $('#name2').attr('value', 'Player 2');
    };
    if($('#name1').val()===$('#name2').val()){    //cannot have same names
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

});  //end document ready
