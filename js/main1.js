$(document).ready(function(){

  $('#box1').on('click', function(){
    currentTarget = $('#box1');
    boxCheck('box1', playerNumber );
    boxes.box1.owner = playerNumber;
  });

  $('#box2').on('click', function(){
    currentTarget = $('#box2');
    boxCheck('box2', playerNumber );
    boxes.box2.owner = playerNumber;
  });

  $('#box3').on('click', function(){
    currentTarget = $('#box3');
    boxCheck('box3', playerNumber );
    boxes.box3.owner = playerNumber;
  });

  $('#box4').on('click', function(){
    currentTarget = $('#box4');
    boxCheck('box4', playerNumber );
    boxes.box4.owner = playerNumber;
  });

  $('#box5').on('click', function(){
    currentTarget = $('#box5');
    boxCheck('box5', playerNumber );
    boxes.box5.owner = playerNumber;
  });

  $('#box6').on('click', function(){
    currentTarget = $('#box6');
    boxCheck('box6', playerNumber );
    boxes.box6.owner = playerNumber;
  });

  $('#box7').on('click', function(){
    currentTarget = $('#box7');
    boxCheck('box7', playerNumber );
    boxes.box7.owner = playerNumber;
  });

  $('#box8').on('click', function(){
    currentTarget = $('#box8');
    boxCheck('box8', playerNumber );
    boxes.box8.owner = playerNumber;
  });

  $('#box9').on('click', function(){
    currentTarget = $('#box9');
    boxCheck('box9', playerNumber );
    boxes.box9.owner = playerNumber;
  });

});
