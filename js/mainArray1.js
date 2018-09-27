$(document).ready(function(){

  $('#scoreboard').hide();
  $('tbody').hide();
  $('#bullet1').hide();
  $('#bullet2').hide();
  $('#gunLeft').hide();
  $('#laserRight').hide();

  let clickX;
  let clickY;

  let gunshot = new Audio('images/hadouken.mp3');
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

    if (board[this.id]==='x'||board[this.id]=='o'){
      alert('Square taken, please choose again');
      return;
    }else{

      if (currentPlayer===$('#name1').val()){
        $('#gunLeft').attr('src', $('#gunLeft').attr('src') + '?' + Math.random());
        setTimeout(function(){
          gunshot.play();
          $('#gunLeft').load();
          $('#bullet1').animate({left: `${clickX}px`, top: `${clickY}px`},1600, function(){
            $('#bullet1').css('left', '5%');
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



      // $('#bullet1').css('left', '5%');
      // $('#bullet1').css('top', '650px');

      // $('#bullet1').animate( {left: 5%, top: 650px} ,0)


      turn( parseInt(this.id), currentPlayer );
      if (board[this.id]==='x'){

        $(this).append(`<img id="explosion${this.id}" class="oorx" src="images/explosion1.gif" />`);
        let imageId = this.id
        setTimeout(
          function(){
            $(`img#explosion${imageId}`).attr("src", "images/xImage.png")
          }, 2000);

      }else{
        // $(this).append('<img class="oorx" src="images/oImage.png" />');
        $(this).append(`<img id="explosion${this.id}" class="oorx" src="images/explosion1.gif" />`);
        let imageId = this.id
        // $(this).append('<img class="oorx" src="images/explosion1.gif" />');
        setTimeout(
          function(){
            $(`img#explosion${imageId}`).attr("src", "images/oImage.png")
          }  , 2000)
        // $(this).append(explosion);
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
