$(document).ready(function(){

  $('.square').on('click', function(){
    // console.log($(this.id));
    // console.log(this.id); --> square number as string
    turn(player, parseInt(this.id));
    checkForMatch();
    console.log(board);
    console.log(player);
  })





});  //end document ready
