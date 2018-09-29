
let currentPlayer = undefined;
let currentPosition= undefined;

let turnCount = 0;

let winner = "";

let player1ScoreDisplay = 0;
$('#player1Score').text(player1ScoreDisplay);   //print score to scoreboard

let player2ScoreDisplay = 0;
$('#player2Score').text(player2ScoreDisplay);     //print score to scoreboard

let board = [0,1,2,3,4,5,6,7,8];

const turn = function(position, player){

  if (currentPlayer === $('#name1').val()){     //if player 1 place x, player 2 place o in board array
    board[position]='x';
  }else{
    board[position]='o';
  }
  turnCount++;
  checkForMatch(currentPlayer);
  playerSwitch();
}

const playerSwitch = function(){
  if (currentPlayer === $('#name1').val()){
    currentPlayer = $('#name2').val();
    $('#leftSelect').css('visibility', 'hidden');
    $('#rightSelect').css('visibility', 'visible');
  }else{
    currentPlayer = $('#name1').val();
    $('#leftSelect').css('visibility', 'visible');
    $('#rightSelect').css('visibility', 'hidden');
  }
};

const checkForMatch = function(n){      //n is the current player
  if(board[0]===board[1] && board[1]===board[2] ||    //row checks
  board[3]===board[4] && board[4]===board[5] ||
  board[6]===board[7] && board[7]===board[8] ||
  board[0]===board[3] && board[3]===board[6] ||   //column checks
  board[1]===board[4] && board[4]===board[7] ||
  board[2]===board[5] && board[5]===board[8] ||
  board[0]===board[4] && board[4]===board[8] ||   //diagonal checks
  board[2]===board[4] && board[4]===board[6]){
    setTimeout(function(){
      gameWin(n);
      addWinnerScore(n);
      winner = n;
    }, 3000);
    return;
  };
  if(turnCount===9 && winner === ""){
    setTimeout(function(){
      gameDraw();
    },3000);
  }
};

const gameWin = function(name){
  $('#placeWinnersName').text(`${name}`);
  $('#winWindow').fadeIn("slow");
  setTimeout(function(){      //delay speech of winner's name
    var msg = new SpeechSynthesisUtterance(`${name} is a weeener`);
    window.speechSynthesis.speak(msg);
  },1000)
}

const gameDraw = function(){
  $('#drawWindow').fadeIn("slow");
  setTimeout(function(){      //delay speech of winner's name
    var msg = new SpeechSynthesisUtterance(`This game is a DRAW!`);
    window.speechSynthesis.speak(msg);
  },1000)
}

const resetGame = function(){
  board = [0,1,2,3,4,5,6,7,8];
  $('.square').empty();     //clear graphics from squares
  turnCount=0;
  winner = "";
}

const addWinnerScore = function(n){
  if (n === $('#name1').val()){   //depending on who wins, add 1, refresh scoreboard display
    player1ScoreDisplay++;
    $('#player1Score').text(player1ScoreDisplay);
  }else{
    player2ScoreDisplay++;
    $('#player2Score').text(player2ScoreDisplay);
  }
}
